import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  // Hard-coded templates data
  const templates = [
    {
      id: 1,
      title: "Student Developer Portfolio",
      description: "A modern, text-only portfolio designed for student developers. This template showcases a dynamic hero section, an about section, project highlights, skill badges, and a contact form, all with a toggleable light/dark theme and smooth animations",
      image_url: "./src/assets/s_deve.jpg" 
    },    
    {
      id: 2,
      title: "Student Designer Portfolio",
      description: "A bold, magazine-style portfolio template designed for student designers. Featuring a fixed vertical sidebar, animated header text, a masonry grid for projects, typewriter-effect about section, and dynamic skill badges, this template highlights creativity and modern design aesthetics",
      image_url: "./src/assets/s_des.jpg"
    },
    {
      id: 3,
      title: "Content Writer Portfolio",
      description: "A horizontal-scrolling portfolio with four distinct panels for About, Writings, Editorials, and Contact. Emphasizes text-based content and a unique side-to-side navigation experience.",
      image_url: "./src/assets/c_w.jpg"
    },
    {
      id: 4,
      title: "Marketing Fresher Portfolio",
      description: "A diagonal-split portfolio with a fixed right-side navigation. Features bold gradients, angled sections, animated headings, and an energetic layout to reflect a fresh marketing perspective.",
      image_url: "./src/assets/m.jpg"
    },
    {
      id: 5,
      title: "Experienced SDE Portfolio",
      description: "A split-screen layout with a left intro panel and a right vertical menu. Below, a content area displays about, experience timeline, projects, skills, and a contact form with modern animations",
      image_url: "./src/assets/sde.jpg"
    },
    {
      id: 6,
      title: "Entrepreneur Startup Founder Portfolio",
      description: "A Z-shaped (zigzag) layout with alternating colored panels, focusing on about, ventures, a vision CTA, and a minimal contact form. Ideal for showcasing entrepreneurial spirit and leadership.",
      image_url: "./src/assets/startup.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <section className="relative pt-20 h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/bg-grid.svg')] bg-repeat opacity-30"></div>
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-purple-600/20 to-transparent blur-3xl transform -translate-y-1/2 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Build Your Dream</span>
                <br /> Portfolio in Minutes
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-lg">
                Create a stunning portfolio website that showcases your work and impresses potential clients and employers.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1">
                  Get Started
                </button>
                {/* <button className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Learn More
                </button> */}
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-800 shadow-2xl shadow-purple-900/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-gray-800 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" 
                  alt="Portfolio Preview" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full blur-xl opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent inline-block">
              Powerful Features
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
              Everything you need to create a stunning portfolio website that stands out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
              <div className="w-14 h-14 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">Responsive Design</h3>
              <p className="text-gray-400">Your portfolio looks perfect on all devices, from mobile phones to desktop computers.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
              <div className="w-14 h-14 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">Customizable Themes</h3>
              <p className="text-gray-400">Choose from a variety of professionally designed themes or create your own unique look.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
              <div className="w-14 h-14 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">One-Click Publish</h3>
              <p className="text-gray-400">Publish your portfolio with a single click and share it with the world instantly.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Templates Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
          <div className="absolute top-20 left-1/3 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-indigo-500 bg-clip-text text-transparent inline-block">
              Stunning Templates
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
              Choose from our collection of beautiful, ready-to-use portfolio templates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div 
                key={template.id} 
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={template.image_url} 
                    alt={template.title}
                    className="w-full h-full object-center transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{template.title}</h3>
                  <p className="text-gray-400 text-sm">{template.description}</p>
                  <Link to={`/template/${template.id}`}>
                  <button className="mt-4 text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center transition-colors duration-300">
                    View Template
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400/10 px-6 py-3 rounded-lg font-medium transition-all duration-300">
              Browse All Templates
            </button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Showcase Your Work to the World?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of professionals who are building impressive portfolios and landing more clients with our platform.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1">
              Start Building Your Portfolio
            </button>
          </div>
        </div>
      </section>
      Stunning
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home

