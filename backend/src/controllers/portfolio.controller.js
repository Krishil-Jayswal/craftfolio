import Portfolio from "../models/portfolio.model.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../config/constants.js";
import fs from "fs";

export const getTemplates = async (req, res) => {
  try {
    const templates = await Portfolio.find({ type: "template" }).select(
      "title description codeurl imageurl"
    );
    const data = templates.map((template) => {
      return {
        id: template._id,
        title: template.title,
        description: template.description,
        codeurl: template.codeurl,
        imageurl: template.imageurl,
        prompt: template.prompt,
      };
    });

    res.status(200).json({ templates: data });
  } catch (error) {
    console.log("Error in getting templates: ", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getTemplateById = async (req, res) => {
  try {
    const id = req.params.templateId;
    if (!id || id.length !== 24) {
      return res.status(400).json({ message: "Template ID is required." });
    }

    const template = await Portfolio.findOne({ type: "template", _id: id });

    if (!template) {
      return res.status(404).json({ message: "Template not found." });
    }

    res.status(200).json({
      template: {
        id: template._id,
        title: template.title,
        description: template.description,
        codeurl: template.codeurl,
        imageurl: template.imageurl,
        prompt: template.prompt,
      },
    });
  } catch (error) {
    console.error("Error in getting template: ", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const generatePortfolio = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ message: "Prompt is required." });
  }

  const genAi = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });

  const enrichmentPrompt = `
    The user wants a portfolio website with the following request:
    "${prompt}"

    Your task:
    - Improve animations (GSAP-based smooth transitions, hover effects, parallax scrolling).
    - Enhance the UI with 3D elements (Three.js), neumorphism, and glassmorphism.
    - Ensure responsiveness across mobile, tablet, and desktop.
    - Add microinteractions and modern UI trends.

    Convert this into a highly detailed, enriched prompt focusing on animations, UX, and design enhancements.
    Return only the enriched prompt—nothing else.
  `;

  const enrichedResponse = await model.generateContent(enrichmentPrompt);
  const enrichedPrompt = enrichedResponse.response.text();

  const systemPrompt = 
  `
    You are an expert **front-end developer and UI/UX designer** with deep mastery of **HTML, CSS, JavaScript, GSAP, Three.js, and TailwindCSS**.  
    Your task is to generate a **fully interactive, visually stunning, and futuristic portfolio** inside a **single index.html file**.

    ### 🌟 **Key Features**
    - **Ultra-smooth animations** with **GSAP (GreenSock)**, ensuring a premium experience.
    - **A 3D interactive background** using **Three.js**, creating an immersive feel.
    - **Futuristic UI** with:
      - **Glowing neon effects** and **glassmorphism (frosted glass look)**.
      - **Neumorphism (soft shadows for depth and realism)**.
      - **Dynamic gradients and fluid transitions**.
    - **A fully responsive design** that adapts beautifully across **mobile, tablet, and desktop**.
    - **Microinteractions & Hover Effects** for an engaging user experience.
    - **Parallax Scrolling Effects** for added depth and realism.
    - **Dark and Neon Themes** to create a **modern, high-tech aesthetic**.

    ### 🎯 **Strict Requirements**
    - **All code must be contained in a single index.html file** (no separate CSS/JS files).
    - **No additional external libraries or dependencies** beyond CDN-hosted versions of:
      - **Three.js** for 3D elements.
      - **GSAP** for animations.
      - **TailwindCSS** for modern styling.
    - **The output should be pure HTML, CSS, and JavaScript**—no explanations, comments, or additional text in the response.
    - **The code must be highly optimized and structured** for easy modification.
    - **The final design must be cross-browser compatible** (Chrome, Firefox, Edge, Safari).

    Your response **must contain only the HTML file content**—nothing else. No explanations, no extra text—just the fully functional HTML code.
  `;

  const finalPrompt = `${systemPrompt}\n\n### **User's Customization:**\n${enrichedPrompt}`;
  const response = await model.generateContent(finalPrompt);

  const portfolioHTML = response.response.text();
  fs.writeFileSync("1.html", portfolioHTML, "utf-8");

  res.status(200).json({ html: portfolioHTML });
};

export const updatePortfolio = (req, res) => {};
