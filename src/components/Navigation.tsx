import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Info, Users, Phone, LogOut } from 'lucide-react';

function Navigation() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Add sign out logic here
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <button
              onClick={() => navigate('/physical-wellness')}
              className="inline-flex items-center px-3 py-2 text-gray-700 hover:text-green-600"
            >
              <Home className="w-5 h-5 mr-2" />
              Home
            </button>
            <button
              onClick={() => navigate('/physical-wellness/info')}
              className="inline-flex items-center px-3 py-2 text-gray-700 hover:text-green-600"
            >
              <Info className="w-5 h-5 mr-2" />
              Info
            </button>
            <button
              onClick={() => navigate('/physical-wellness/classes')}
              className="inline-flex items-center px-3 py-2 text-gray-700 hover:text-green-600"
            >
              <Users className="w-5 h-5 mr-2" />
              Classes
            </button>
            <button
              onClick={() => navigate('/physical-wellness/contact')}
              className="inline-flex items-center px-3 py-2 text-gray-700 hover:text-green-600"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </button>
          </div>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center px-3 py-2 text-red-600 hover:text-red-700"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;