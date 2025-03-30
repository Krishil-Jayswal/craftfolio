import Navbar from "./Navbar";
import Footer from "./Footer";

const teamMembers = [
  {
    name: "Marmik Vasava",
    role: "Frontend Developer",
    email: "marmikvasava051404@gmail.com",
    phone: "+91 8511390888",
    image: "./src/assets/marmik.jpg", // Replace with actual image URL
  },
  {
    name: "Krishil Jayswal",
    role: "MERN Stack Developer",
    email: "krishil.jayswal@example.com",
    phone: "+91 9979274622",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Bhavya Boda",
    role: "Backend Developer",
    email: "bhavya.boda@example.com",
    phone: "+91 9099727696",
    image: "./src/assets/boda.jpg", // Replace with actual image URL
  },
  {
    name: "Yuvraj Kathad",
    role: "Front-End Developer",
    email: "kathadyuvraj05@gmail.com",
    phone: "+91 7984022214",
    image: "./src/assets/kathad.jpg", // Replace with actual image URL
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-8">Contact Our Team</h1>
        <p className="text-lg text-gray-300 mb-12">
          Feel free to reach out to us for any inquiries or collaborations.
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
              <p className="text-gray-400 mt-2">
                📧 <a href={`mailto:${member.email}`} className="text-blue-400 hover:underline">
                  {member.email}
                </a>
              </p>
              <p className="text-gray-400 mt-1">
                📞 {member.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
