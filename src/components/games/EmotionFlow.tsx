import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Sparkles } from 'lucide-react';

interface EmotionFlowProps {
  onClose: () => void;
  onComplete: () => void;
}

export default function EmotionFlow({ onClose, onComplete }: EmotionFlowProps) {
  const [score, setScore] = useState(0);
  const [currentEmotion, setCurrentEmotion] = useState<Emotion | null>(null);
  const [strategies, setStrategies] = useState<string[]>([]);
  const [feedback, setFeedback] = useState('');
  const [gameCompleted, setGameCompleted] = useState(false);

  const emotions: Emotion[] = [
    { feeling: 'Anxious', strategy: 'Take 3 deep breaths' },
    { feeling: 'Stressed', strategy: 'Progressive muscle relaxation' },
    { feeling: 'Sad', strategy: 'Practice self-compassion' },
    { feeling: 'Overwhelmed', strategy: 'Break tasks into smaller steps' },
    { feeling: 'Angry', strategy: 'Count to ten slowly' }
  ];

  useEffect(() => {
    if (score >= 5 && !gameCompleted) {
      setGameCompleted(true);
      onComplete();
    }
  }, [score, gameCompleted, onComplete]);

  const startNewRound = () => {
    const emotion = emotions[Math.floor(Math.random() * emotions.length)];
    setCurrentEmotion(emotion);
    
    const incorrectStrategies = emotions
      .filter(e => e.strategy !== emotion.strategy)
      .map(e => e.strategy)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
    
    setStrategies([...incorrectStrategies, emotion.strategy].sort(() => Math.random() - 0.5));
    setFeedback('');
  };

  useEffect(() => {
    startNewRound();
  }, []);

  const handleStrategyClick = (strategy: string) => {
    if (currentEmotion) {
      if (strategy === currentEmotion.strategy) {
        setScore(prev => prev + 1);
        setFeedback('Correct! Great job matching the emotion with its coping strategy.');
      } else {
        setFeedback(`Try again! When feeling ${currentEmotion.feeling.toLowerCase()}, ${currentEmotion.strategy.toLowerCase()} can help.`);
      }
      setTimeout(startNewRound, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-purple-50 to-blue-50 z-50 overflow-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Exit Game
        </button>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Emotion Flow</h2>
          <p className="text-gray-600">Score: {score}</p>
        </div>

        {currentEmotion && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Heart className="w-12 h-12 text-pink-500" />
              <h3 className="text-2xl font-bold text-gray-800">
                Feeling: {currentEmotion.feeling}
              </h3>
            </div>

            <p className="text-center text-gray-600 mb-8">
              Choose the best coping strategy for this emotion:
            </p>

            <div className="grid gap-4">
              {strategies.map((strategy, index) => (
                <button
                  key={index}
                  onClick={() => handleStrategyClick(strategy)}
                  className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-left flex items-center gap-3"
                >
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  {strategy}
                </button>
              ))}
            </div>
          </div>
        )}

        {feedback && (
          <div className="bg-white/80 backdrop-blur-sm fixed bottom-0 left-0 right-0 p-6 text-center">
            <p className="text-lg text-gray-800">{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
}