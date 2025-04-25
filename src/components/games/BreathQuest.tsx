import React, { useState, useEffect } from 'react';
import { ArrowLeft, Wind, Cloud } from 'lucide-react';

export default function BreathQuest({ onClose }: { onClose: () => void }) {
  const [isBreathing, setIsBreathing] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [progress, setProgress] = useState(0);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isBreathing) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            // Switch phases
            if (phase === 'inhale') {
              setPhase('hold');
              return 0;
            } else if (phase === 'hold') {
              setPhase('exhale');
              return 0;
            } else {
              setPhase('inhale');
              setCycles(prev => prev + 1);
              return 0;
            }
          }
          return prev + 1; // Slower progress
        });
      }, 100); // Longer interval for smoother animation
    }

    return () => clearInterval(interval);
  }, [isBreathing, phase]);

  const toggleBreathing = () => {
    setIsBreathing(!isBreathing);
    if (!isBreathing) {
      setPhase('inhale');
      setProgress(0);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-blue-50 to-cyan-50 z-50 overflow-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Exit Quest
        </button>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Breath Quest</h2>
          <p className="text-gray-600">Completed Cycles: {cycles}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
          {/* Animated Background */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100"
            style={{
              transform: `scale(${1 + progress * 0.003})`,
              transition: 'transform 0.1s ease-out'
            }}
          />

          {/* Breathing Animation */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px]">
            <div 
              className="relative"
              style={{
                transform: `scale(${1 + progress * 0.008})`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <Cloud 
                className={`w-32 h-32 transition-colors duration-300 ${
                  phase === 'inhale' ? 'text-blue-400' :
                  phase === 'hold' ? 'text-blue-600' :
                  'text-blue-300'
                }`}
              />
              <Wind 
                className={`w-8 h-8 text-blue-300 absolute top-1/2 right-0 transform -translate-y-1/2 transition-opacity duration-300 ${
                  phase === 'exhale' ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>

            <div className="text-center mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {phase === 'inhale' ? 'Breathe In' :
                 phase === 'hold' ? 'Hold' :
                 'Breathe Out'}
              </h3>
              <p className="text-gray-600">
                {phase === 'inhale' ? 'Fill your lungs with fresh air' :
                 phase === 'hold' ? 'Hold your breath gently' :
                 'Release your breath slowly'}
              </p>
            </div>
          </div>

          <button
            onClick={toggleBreathing}
            className={`mt-8 w-full py-3 rounded-lg transition-colors ${
              isBreathing
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {isBreathing ? 'Stop Breathing Exercise' : 'Start Breathing Exercise'}
          </button>
        </div>
      </div>
    </div>
  );
}