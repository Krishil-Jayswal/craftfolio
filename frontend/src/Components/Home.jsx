import React from 'react'
import Navbar from './Navbar'

const Home = () => {
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
      {/* <section className="py-20 relative">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
            {/* Feature 1 */}
            {/* <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
              <div className="w-14 h-14 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">Responsive Design</h3>
              <p className="text-gray-400">Your portfolio looks perfect on all devices, from mobile phones to desktop computers.</p>
            </div> */}
            
            {/* Feature 2 */}
            {/* <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
              <div className="w-14 h-14 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">Customizable Themes</h3>
              <p className="text-gray-400">Choose from a variety of professionally designed themes or create your own unique look.</p>
            </div> */}
            
            {/* Feature 3 */}
            {/* <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
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
      </section> */}
      
      {/* Testimonials Section */}
      {/* <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block">
              Loved by Professionals
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
              Join thousands of professionals who use our platform to showcase their work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
            {/* Testimonial 1 */}
            {/* <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-8 rounded-xl hover:shadow-lg hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-purple-500">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="User" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Sarah Johnson</h4>
                  <p className="text-gray-400 text-sm">UX Designer</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"This platform has transformed how I present my work to clients. I've received more inquiries in one month than I did all of last year!"</p>
            </div> */}
            
            {/* Testimonial 2 */}
            {/* <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-8 rounded-xl hover:shadow-lg hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-purple-500">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" alt="User" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Michael Chen</h4>
                  <p className="text-gray-400 text-sm">Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"The templates are beautiful and I was able to customize every aspect to match my personal brand. Absolute game-changer!"</p>
            </div> */}
            
            {/* Testimonial 3 */}
            {/* <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-8 rounded-xl hover:shadow-lg hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-purple-500">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" alt="User" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Emily Rodriguez</h4>
                  <p className="text-gray-400 text-sm">Photographer</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"As a photographer, presentation is everything. This platform allows me to showcase my work with stunning layouts that highlight every detail."</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Home
