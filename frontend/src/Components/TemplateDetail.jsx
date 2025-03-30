import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TemplateDetail = () => {
  const { id } = useParams();
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const response = await fetch(`/api/v1/portfolio/templates/${id}`);
        if (!response.ok) {
          throw new Error("Template not found");
        }
        const data = await response.json();
        setTemplate(data);
      } catch (error) {
        console.error("Error fetching template:", error);
        setTemplate(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [id]);

  if (loading) return <div className="text-white text-center mt-20">Loading...</div>;
  if (!template) return <div className="text-white text-center mt-20">Template not found</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold">{template.title}</h1>
        <img src={template.image_url} alt={template.title} className="mt-6 w-full h-96 object-cover rounded-lg" />
        <p className="mt-4 text-lg text-gray-300">{template.description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default TemplateDetail;
