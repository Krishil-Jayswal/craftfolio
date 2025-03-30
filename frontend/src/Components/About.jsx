import Navbar from "./Navbar";
import Footer from "./Footer";

const teamMembers = [
  {
    name: "Marmik Vasava",
    role: "Frontend Developer",
    image: "./src/assets/marmik.jpg", // Replace with actual image URL
  },
  {
    name: "Krishil Jayswal",
    role: "MERN Stack Developer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Bhavya Boda",
    role: "Backend Developer",
    image: "./src/assets/boda.jpg", // Replace with actual image URL
  },
  {
    name: "Yuvraj Kathad",
    role: "Front-End Developer",
    image: "./src/assets/kathad.jpg", // Replace with actual image URL
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-8">Meet Our Team</h1>
        <p className="text-lg text-gray-300 mb-12">
          We are a team of passionate developers from DAIICT, specializing in different areas of software development.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-gray-700"
              />
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
