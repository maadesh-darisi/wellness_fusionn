import React from 'react';
import { useNavigate } from 'react-router-dom';

function PhysicalWellnessClasses() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-12">Age-Specific Yoga Programs</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1602192509154-0b900ee1f851?auto=format&fit=crop&q=80" 
            alt="Children doing yoga"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Children</h2>
            <p className="text-gray-600 mb-4">
              Children aged between 0-17 are recommended to do these asanas.
            </p>
            <button
              onClick={() => navigate('/physical-wellness/classes/children')}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
            >
              Click here for more information
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80" 
            alt="Adults doing yoga"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Middle-Aged</h2>
            <p className="text-gray-600 mb-4">
              Adults aged between 17-60 are recommended to do these asanas.
            </p>
            <button
              onClick={() => navigate('/physical-wellness/classes/adults')}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
            >
              Click here for more information
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?auto=format&fit=crop&q=80" 
            alt="Senior people doing yoga"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Old-Aged</h2>
            <p className="text-gray-600 mb-4">
              People aged above 60 are recommended to do these asanas.
            </p>
            <button
              onClick={() => navigate('/physical-wellness/classes/seniors')}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
            >
              Click here for more information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhysicalWellnessClasses;