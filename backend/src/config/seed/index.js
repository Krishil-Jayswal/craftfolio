import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
  DATABASE_URL,
} from "../constants.js";
import { fileURLToPath } from "url";
import path from "path";
import Portfolio from "../../models/portfolio.model.js";
import { connectDB } from "../db.js";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const files = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// for (let i = 0; i < files.length; i++) {
//   const filepath = path.resolve(__dirname, files[i]);
//   console.log(filepath);
//   const response = await cloudinary.uploader.upload(filepath, {
//     folder: "ace-hack-teemplates",
//   });
//   console.log(response.secure_url);
// }

const data = [
  {
    title: "Student Developer Portfolio Template",
    description:
      "A modern, text-only portfolio designed for student developers. This template showcases a dynamic hero section, an about section, project highlights, skill badges, and a contact form, all with a toggleable light/dark theme and smooth animations.",
    prompt:
      "Generate a complete, self-contained portfolio website using HTML, CSS, and JavaScript tailored for a student developer. The website must include a fixed navigation bar at the top with a logo and links to each section, as well as a toggle button for switching between light and dark themes. The hero section should fill the entire viewport with a background gradient, a semi-transparent overlay, and animated text that slides down, displaying the developer’s name and a short tagline. Following the hero, include an About section that provides a concise, engaging description of the developer’s background and passion for technology. Next, create a Projects section that displays three project cards in a grid layout; each card should have a title and a brief description with a hover effect that elevates the card. Add a Skills section where the top five skills are displayed as badges. Finally, include a Contact section with a centered form for visitors to send a message, and a footer that contains copyright information. Do not use any images; focus solely on text and modern styling. Ensure the design is responsive and includes smooth fade-in animations for the content. Use the following sample values: name 'John Doe', role 'Student Developer', tagline 'Student Developer & Future Tech Leader', and the provided project and skills details.",
    type: "template",
    codeurl:
      "https://res.cloudinary.com/dlpepteai/raw/upload/v1743312306/ace-hack-teemplates/f4mgid9sjbhfb84ulztq.html",
    imageurl:
      "https://res.cloudinary.com/dlpepteai/image/upload/v1743313685/ace-hack-teemplates/digf8g9guta58dhe5vms.jpg",
  },
  {
    title: "Student Designer Portfolio Template",
    description:
      "A bold, magazine-style portfolio template designed for student designers. Featuring a fixed vertical sidebar, animated header text, a masonry grid for projects, typewriter-effect about section, and dynamic skill badges, this template highlights creativity and modern design aesthetics.",
    prompt:
      "Generate a complete, self-contained portfolio website using HTML, CSS, and JavaScript tailored for a student designer. The design should be distinctly creative and bold, featuring a fixed vertical sidebar on the left that displays the designer’s name and navigation links (Home, About, Work, Skills, Contact). The main content area, to the right of the sidebar, should have a header section with large, animated text that reveals the designer’s name and a short tagline using a creative reveal effect. The About section should include a typewriter-effect animation for a brief description of the designer’s background and creative passion. Next, build a Projects section that employs a masonry grid layout to display project cards—each card containing a project title and a brief description, with a hover effect that subtly elevates the card. The Skills section should display animated skill badges (pills) that pop in sequentially. Finally, include a Contact section with a centered form for visitors to send a message, and a footer with copyright information. Do not include any images; the design should rely entirely on text, creative typography, and rich animations. Use the following sample values: name 'Jane Smith', role 'Student Designer & Visual Storyteller', tagline 'Creative Designer & Visual Storyteller', along with sample project titles and descriptions as provided.",
    type: "template",
    codeurl:
      "https://res.cloudinary.com/dlpepteai/raw/upload/v1743312307/ace-hack-teemplates/dysoaiqpjmpkzmgjoc8z.html",
    imageurl:
      "https://res.cloudinary.com/dlpepteai/image/upload/v1743313686/ace-hack-teemplates/toka5ttcgdwumwbbabbv.jpg",
  },
  {
    title: "Marketing Fresher Portfolio Template",
    description:
      "A diagonal-split portfolio with a fixed right-side navigation. Features bold gradients, angled sections, animated headings, and an energetic layout to reflect a fresh marketing perspective.",
    prompt:
      "Generate a complete, self-contained portfolio website using HTML, CSS, and JavaScript for a marketing fresher. The design should feature a unique diagonal-split layout with a fixed vertical side navigation on the right. The header section must have an angled, dual-color background with a subtle diagonal clip, where the candidate's name and tagline are revealed with animated slide-in effects. Following the header, include an About section with a centered description detailing the candidate’s background in digital marketing and creative communication. Next, create a Campaigns section that displays three campaign cards in a grid layout; each card should include a title and a short description, with a flip or 3D rotation effect on hover. Add a Skills section that displays five interactive skill badges that scale on hover. Finally, include a Contact section with a clean, centered form for visitors to send a message, and ensure the design includes a toggleable light/dark theme. All elements must be text-based, with rich animations and creative typography, conveying energy and modernity for a marketing professional.",
    type: "template",
    codeurl:
      "https://res.cloudinary.com/dlpepteai/raw/upload/v1743312308/ace-hack-teemplates/ravzzcwvpf1sbael7p3a.html",
    imageurl:
      "https://res.cloudinary.com/dlpepteai/image/upload/v1743313687/ace-hack-teemplates/cwz8aojis929ugguyylw.jpg",
  },
  {
    title: "Experienced SDE Portfolio Template",
    description:
      "A split-screen layout with a left intro panel and a right vertical menu. Below, a content area displays about, experience timeline, projects, skills, and a contact form with modern animations.",
    prompt:
      "Generate a self-contained portfolio website using HTML, CSS, and JavaScript for an experienced software development engineer. The design should employ a split-screen layout with a color-blocked left side that displays the candidate's name, role, and a short tagline, and a right vertical menu with links to sections (About, Experience, Projects, Skills, Contact). Below the split-screen, include a content area with several sections: an About section with a professional summary; an Experience section featuring a vertical timeline that lists career milestones with smooth reveal animations as the user scrolls; a Projects section displaying three project cards in a grid layout, each with a title and brief description and a subtle hover effect; and a Skills section with interactive skill badges that scale on hover. Conclude with a Contact section containing a centered form for sending messages. The overall design should be clean and modern, with minimal yet effective animations, and include a toggleable light/dark theme. Use sample values such as 'Michael Scott' for the name, 'Experienced Software Development Engineer' for the title, and the provided timeline and project details.",
    type: "template",
    codeurl:
      "https://res.cloudinary.com/dlpepteai/raw/upload/v1743312309/ace-hack-teemplates/zk6gmjebt7sgysbcrblq.html",
    imageurl:
      "https://res.cloudinary.com/dlpepteai/image/upload/v1743313688/ace-hack-teemplates/uwzm5qd1natgtcndmy6n.jpg",
  },
  {
    title: "Entrepreneur Startup Founder Portfolio Template",
    description:
      "A Z-shaped (zigzag) layout with alternating colored panels, focusing on about, ventures, a vision CTA, and a minimal contact form. Ideal for showcasing entrepreneurial spirit and leadership.",
    prompt:
      "Generate a complete, self-contained portfolio website using HTML, CSS, and JavaScript for an entrepreneur startup founder. The design should adopt a Z-shaped (zigzag) layout with alternating, angled sections that create a dynamic, non-linear flow. Begin with a minimal header featuring a fixed top bar that includes the founder's name, a small navigation menu, and a theme toggle button. The first zigzag section should present an About segment with a bold description of the founder’s background and passion for innovation, arranged in two contrasting panels. The next section should showcase Ventures using a grid of venture cards, each containing a title and a brief description of key business initiatives. Include another panel for Achievements detailing major milestones. Then, add a prominent call-to-action section titled 'Our Vision' that outlines the startup's mission with an eye-catching button. Finally, provide a minimal Contact section with a centered form for inquiries. The design must incorporate smooth animations, creative diagonal cuts, and a toggleable light/dark theme, relying solely on text elements and CSS effects without any images. Use sample values such as 'David King', 'Startup Founder & Visionary Leader', and the provided venture and vision details.",
    type: "template",
    codeurl:
      "https://res.cloudinary.com/dlpepteai/raw/upload/v1743312310/ace-hack-teemplates/ha5zgh4aidlapoqalfdz.html",
    imageurl:
      "https://res.cloudinary.com/dlpepteai/image/upload/v1743313689/ace-hack-teemplates/j4ghyst1bs5lfsrwwlv0.jpg",
  },
  {
    title: "Content Writer Portfolio Template",
    description:
      "A horizontal-scrolling portfolio with four distinct panels for About, Writings, Editorials, and Contact. Emphasizes text-based content and a unique side-to-side navigation experience.",
    prompt:
      "Generate a complete, self-contained portfolio website using HTML, CSS, and JavaScript for a content writer. The design should feature a horizontal-scrolling layout with four distinct panels that fill the viewport. The panels should be arranged side by side and navigable via fixed top buttons. The first panel (About) must display the writer’s name, role, and a compelling introduction. The second panel (Writings) should list several writing pieces with titles and short descriptions in a clean list format. The third panel (Editorials) should showcase editorial articles with similar styling. The final panel (Contact) must include a centered contact form. The design should focus on clear, readable typography and smooth transition animations for scrolling between panels, with a toggleable light/dark theme. Avoid using images and emphasize a magazine-like, text-centric style. Use sample values such as 'Emily Green', 'Content Writer & Storyteller', and the provided article details.",
    type: "template",
    codeurl:
      "https://res.cloudinary.com/dlpepteai/raw/upload/v1743312311/ace-hack-teemplates/ghkptpmbbeqzlq8yv2nc.html",
    imageurl:
      "https://res.cloudinary.com/dlpepteai/image/upload/v1743313690/ace-hack-teemplates/bar2jce5rqjjqj6jcwws.jpg",
  },
];

await connectDB(DATABASE_URL);

await Portfolio.insertMany(data);
