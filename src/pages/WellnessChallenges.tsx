import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain, Moon, Cog as Yoga, CheckCircle2, Heart, Dumbbell } from 'lucide-react';

interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  days: {
    day: number;
    task: string;
    completed: boolean;
  }[];
}

function WellnessChallenges() {
  const navigate = useNavigate();
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: 'mindfulness',
      title: '7 Days of Mindfulness',
      description: 'Build a daily meditation practice with guided exercises.',
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      days: [
        { day: 1, task: '5 minutes morning meditation', completed: false },
        { day: 2, task: 'Mindful walking practice', completed: false },
        { day: 3, task: 'Body scan meditation', completed: false },
        { day: 4, task: 'Mindful eating exercise', completed: false },
        { day: 5, task: 'Loving-kindness meditation', completed: false },
        { day: 6, task: 'Breath awareness practice', completed: false },
        { day: 7, task: 'Full 15-minute meditation', completed: false }
      ]
    },
    {
      id: 'sleep',
      title: '7 Days to Better Sleep',
      description: 'Develop healthy sleep habits for better rest.',
      icon: <Moon className="w-12 h-12 text-blue-500" />,
      days: [
        { day: 1, task: 'Create a bedtime routine', completed: false },
        { day: 2, task: 'No screens 1 hour before bed', completed: false },
        { day: 3, task: 'Bedroom environment optimization', completed: false },
        { day: 4, task: 'Evening relaxation practice', completed: false },
        { day: 5, task: 'Sleep schedule consistency', completed: false },
        { day: 6, task: 'Caffeine awareness day', completed: false },
        { day: 7, task: 'Full sleep routine implementation', completed: false }
      ]
    },
    {
      id: 'yoga',
      title: 'Gentle Yoga for Beginners',
      description: 'Start your yoga journey with simple, effective poses.',
      icon: <Yoga className="w-12 h-12 text-green-500" />,
      days: [
        { day: 1, task: 'Basic breathing exercises', completed: false },
        { day: 2, task: 'Simple stretching sequence', completed: false },
        { day: 3, task: 'Standing poses introduction', completed: false },
        { day: 4, task: 'Seated poses practice', completed: false },
        { day: 5, task: 'Balance pose basics', completed: false },
        { day: 6, task: 'Flow sequence introduction', completed: false },
        { day: 7, task: 'Full beginner practice', completed: false }
      ]
    },
    {
      id: 'monthly-wellness',
      title: 'Monthly Mind-Body Balance',
      description: 'A comprehensive challenge combining mental and physical activities.',
      icon: <Heart className="w-12 h-12 text-red-500" />,
      days: [
        { day: 1, task: 'Morning meditation + 10-minute walk', completed: false },
        { day: 2, task: 'Journaling + strength training', completed: false },
        { day: 3, task: 'Mindful eating + yoga session', completed: false },
        { day: 4, task: 'Gratitude practice + cardio', completed: false },
        { day: 5, task: 'Digital detox + nature walk', completed: false },
        { day: 6, task: 'Creative expression + flexibility work', completed: false },
        { day: 7, task: 'Self-reflection + active recovery', completed: false }
      ]
    },
    {
      id: 'fitness',
      title: 'Monthly Fitness Journey',
      description: 'Progressive fitness challenge for all levels.',
      icon: <Dumbbell className="w-12 h-12 text-orange-500" />,
      days: [
        { day: 1, task: 'Bodyweight exercises introduction', completed: false },
        { day: 2, task: 'Cardio endurance building', completed: false },
        { day: 3, task: 'Strength training basics', completed: false },
        { day: 4, task: 'Flexibility and mobility work', completed: false },
        { day: 5, task: 'High-intensity interval training', completed: false },
        { day: 6, task: 'Core strength focus', completed: false },
        { day: 7, task: 'Active recovery and stretching', completed: false }
      ]
    }
  ]);

  const toggleTask = (challengeId: string, dayIndex: number) => {
    setChallenges(challenges.map(challenge => {
      if (challenge.id === challengeId) {
        const updatedDays = [...challenge.days];
        updatedDays[dayIndex] = {
          ...updatedDays[dayIndex],
          completed: !updatedDays[dayIndex].completed
        };
        return { ...challenge, days: updatedDays };
      }
      return challenge;
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wellness Challenges</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center gap-4 mb-4">
                  {challenge.icon}
                  <h2 className="text-xl font-bold text-gray-800">{challenge.title}</h2>
                </div>
                <p className="text-gray-600">{challenge.description}</p>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Daily Tasks:</h3>
                <div className="space-y-3">
                  {challenge.days.map((day, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 rounded hover:bg-gray-50 transition-colors"
                    >
                      <button
                        onClick={() => toggleTask(challenge.id, index)}
                        className={`flex items-center justify-center w-6 h-6 rounded-full border-2 
                          ${day.completed 
                            ? 'bg-green-500 border-green-500 text-white' 
                            : 'border-gray-300'
                          }`}
                      >
                        {day.completed && <CheckCircle2 className="w-4 h-4" />}
                      </button>
                      <span className={`flex-1 ${day.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                        Day {day.day}: {day.task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WellnessChallenges;