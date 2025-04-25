import React, { useState, useEffect } from 'react';
import { ArrowLeft, Flower2, Sun, Cloud } from 'lucide-react';

interface MindfulGardenProps {
  onClose: () => void;
  onComplete: () => void;
}

export default function MindfulGarden({ onClose, onComplete }: MindfulGardenProps) {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [meditationStreak, setMeditationStreak] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);
  const [timer, setTimer] = useState(0);

  const addPlant = (x: number, y: number) => {
    const newPlant: Plant = {
      id: Date.now(),
      type: Math.random() > 0.5 ? 'flower' : 'tree',
      stage: 1,
      position: { x, y }
    };
    setPlants([...plants, newPlant]);
  };

  const handleBreathing = () => {
    setIsBreathing(true);
    setTimer(60); // 1-minute meditation session
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isBreathing && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
        if (timer === 1) {
          setIsBreathing(false);
          setMeditationStreak(prev => prev + 1);
          // Call onComplete when meditation is finished
          onComplete();
          // Grow plants when meditation is complete
          setPlants(prevPlants =>
            prevPlants.map(plant => ({
              ...plant,
              stage: Math.min(plant.stage + 1, 3)
            }))
          );
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBreathing, timer, onComplete]);

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Exit Garden
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Mindful Garden</h2>
          <p className="text-gray-600">Meditation Streak: {meditationStreak} days</p>
        </div>

        <div className="bg-gradient-to-b from-blue-100 to-green-100 rounded-xl h-[600px] relative overflow-hidden">
          <div className="absolute top-4 right-4 flex gap-4">
            <Sun className="w-8 h-8 text-yellow-500" />
            <Cloud className="w-8 h-8 text-gray-400" />
          </div>

          {/* Garden Area */}
          <div
            className="w-full h-full"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              addPlant(x, y);
            }}
          >
            {plants.map(plant => (
              <div
                key={plant.id}
                style={{
                  position: 'absolute',
                  left: plant.position.x,
                  top: plant.position.y,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <Flower2
                  className={`w-${8 + plant.stage * 2} h-${8 + plant.stage * 2} 
                    ${plant.type === 'flower' ? 'text-pink-500' : 'text-green-500'}`}
                />
              </div>
            ))}
          </div>

          {/* Meditation Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-6">
            {!isBreathing ? (
              <button
                onClick={handleBreathing}
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                Start 1-Minute Meditation
              </button>
            ) : (
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">{timer}</div>
                <p className="text-gray-600">Breathe in... Breathe out...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}