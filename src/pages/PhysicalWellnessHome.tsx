import React from 'react';
import { Dumbbell } from 'lucide-react';

function PhysicalWellnessHome() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80"
          alt="Yoga Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Dumbbell className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Physical Wellness Journey</h1>
          <blockquote className="text-2xl italic text-white/90 max-w-2xl mx-auto mb-8">
            "If you don't take time for your wellness, you will be forced to take time for your illness."
          </blockquote>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Embark on a transformative journey to enhance your physical well-being through yoga, fitness, and holistic health practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Yoga Classes</h2>
            <p className="text-gray-600">Discover inner peace and physical strength through our expert-led yoga sessions.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fitness Programs</h2>
            <p className="text-gray-600">Personalized workout routines designed to help you achieve your fitness goals.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Wellness Workshops</h2>
            <p className="text-gray-600">Join our workshops to learn about nutrition, meditation, and holistic health.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhysicalWellnessHome;