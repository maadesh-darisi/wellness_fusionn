import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Target, User } from 'lucide-react';

interface RoutineGeneratorForm {
  timeAvailable: string;
  age: string;
  goal: string;
}

function WellnessRoutine() {
  const navigate = useNavigate();
  const [form, setForm] = useState<RoutineGeneratorForm>({
    timeAvailable: '10',
    age: '25',
    goal: 'stress-relief'
  });
  const [routine, setRoutine] = useState<string[]>([]);

  const generateRoutine = () => {
    const routines = {
      'stress-relief': {
        '10': [
          '2 mins: Deep breathing exercises',
          '3 mins: Cat-Cow stretches',
          '3 mins: Child\'s pose',
          '2 mins: Positive affirmations'
        ],
        '20': [
          '5 mins: Mindful breathing',
          '5 mins: Sun Salutations',
          '5 mins: Seated forward bend',
          '5 mins: Guided meditation'
        ],
        '30': [
          '5 mins: Progressive muscle relaxation',
          '10 mins: Gentle flow sequence',
          '10 mins: Yin yoga poses',
          '5 mins: Gratitude meditation'
        ]
      },
      'energy-boost': {
        '10': [
          '2 mins: Jump rope or spot jogging',
          '3 mins: Sun Salutations',
          '3 mins: Standing poses',
          '2 mins: Power affirmations'
        ],
        '20': [
          '5 mins: Dynamic stretching',
          '8 mins: Vinyasa flow',
          '5 mins: Balance poses',
          '2 mins: Energy breathing'
        ],
        '30': [
          '8 mins: Sun Salutations',
          '12 mins: Power yoga sequence',
          '7 mins: Core strengthening',
          '3 mins: Victory breathing'
        ]
      },
      'flexibility': {
        '10': [
          '3 mins: Gentle stretching',
          '4 mins: Basic yoga poses',
          '3 mins: Cool-down stretches'
        ],
        '20': [
          '5 mins: Dynamic stretching',
          '10 mins: Flow sequence',
          '5 mins: Deep stretching'
        ],
        '30': [
          '8 mins: Joint mobility',
          '15 mins: Deep stretch sequence',
          '7 mins: Relaxation poses'
        ]
      }
    };

    const timeKey = form.timeAvailable === '30' ? '30' : form.timeAvailable === '20' ? '20' : '10';
    setRoutine(routines[form.goal as keyof typeof routines][timeKey]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center text-orange-600 hover:text-orange-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </button>

        <div className="bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Daily Wellness Routine Generator</h1>
          
          <div className="grid gap-6 mb-8">
            <div>
              <label className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <Clock className="w-5 h-5 text-orange-500" />
                Time Available
              </label>
              <select
                value={form.timeAvailable}
                onChange={(e) => setForm({ ...form, timeAvailable: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-200"
              >
                <option value="10">10 minutes</option>
                <option value="20">20 minutes</option>
                <option value="30">30 minutes</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <User className="w-5 h-5 text-orange-500" />
                Age
              </label>
              <input
                type="number"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-200"
                min="1"
                max="120"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <Target className="w-5 h-5 text-orange-500" />
                Wellness Goal
              </label>
              <select
                value={form.goal}
                onChange={(e) => setForm({ ...form, goal: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-200"
              >
                <option value="stress-relief">Stress Relief</option>
                <option value="energy-boost">Energy Boost</option>
                <option value="flexibility">Flexibility</option>
              </select>
            </div>
          </div>

          <button
            onClick={generateRoutine}
            className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Generate Routine
          </button>

          {routine.length > 0 && (
            <div className="mt-8 p-6 bg-orange-50 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Personalized Routine</h2>
              <ul className="space-y-3">
                {routine.map((step, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WellnessRoutine;