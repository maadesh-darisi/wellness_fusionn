import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Heart, Dumbbell, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80"
            alt="Wellness Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="w-10 h-10 text-green-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">WELLNESS FUSION</h1>
          </div>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Discover the perfect harmony of mind, body, and spirit through our holistic approach to wellness
          </p>
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => navigate('/signup')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Start Your Journey
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Continue Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Approach to Wellness</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Heart className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Holistic Health</h3>
              <p className="text-gray-600">Integrating physical, mental, and spiritual well-being for complete harmony.</p>
            </div>
            <div className="text-center p-6">
              <Dumbbell className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mind-Body Balance</h3>
              <p className="text-gray-600">Achieve perfect equilibrium through mindful practices and movement.</p>
            </div>
            <div className="text-center p-6">
              <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Personal Growth</h3>
              <p className="text-gray-600">Supporting your journey to self-discovery and transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                text: "Wellness Fusion has completely transformed my approach to health and well-being. The holistic programs are life-changing!",
                role: "Yoga Enthusiast"
              },
              {
                name: "Michael Chen",
                text: "I've never felt better both physically and mentally. The personalized attention and expert guidance is exceptional.",
                role: "Wellness Journey Member"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-lg">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-green-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Leaf className="w-6 h-6 text-green-400" />
              <span className="text-xl font-bold">WELLNESS FUSION</span>
            </div>
            <div className="flex gap-6">
              <Instagram className="w-6 h-6 hover:text-green-400 cursor-pointer" />
              <Facebook className="w-6 h-6 hover:text-green-400 cursor-pointer" />
              <Twitter className="w-6 h-6 hover:text-green-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;