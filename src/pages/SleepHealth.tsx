import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Moon, Clock, Bed, Bell, Volume2 } from 'lucide-react';

interface SleepLog {
  date: string;
  bedtime: string;
  wakeTime: string;
  quality: number;
  notes: string;
}

function SleepHealth() {
  const navigate = useNavigate();
  const [sleepLogs, setSleepLogs] = useState<SleepLog[]>([]);
  const [newLog, setNewLog] = useState<SleepLog>({
    date: new Date().toISOString().split('T')[0],
    bedtime: '',
    wakeTime: '',
    quality: 5,
    notes: ''
  });
  const [showRelaxationTips, setShowRelaxationTips] = useState(false);

  useEffect(() => {
    const savedLogs = localStorage.getItem('sleepLogs');
    if (savedLogs) {
      setSleepLogs(JSON.parse(savedLogs));
    }
  }, []);

  const handleLogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedLogs = [newLog, ...sleepLogs];
    setSleepLogs(updatedLogs);
    localStorage.setItem('sleepLogs', JSON.stringify(updatedLogs));
    setNewLog({
      date: new Date().toISOString().split('T')[0],
      bedtime: '',
      wakeTime: '',
      quality: 5,
      notes: ''
    });
  };

  const relaxationTechniques = [
    {
      title: '4-7-8 Breathing',
      description: 'Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds',
      icon: <Volume2 className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Progressive Muscle Relaxation',
      description: 'Tense and relax each muscle group from toes to head',
      icon: <Bed className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Bedtime Routine',
      description: 'Consistent routine: dim lights, light stretching, reading',
      icon: <Bell className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </button>

        <div className="text-center mb-12">
          <Moon className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Sleep Health Tracker</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track your sleep patterns and develop healthy bedtime routines for better rest and recovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Sleep Log Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Log Your Sleep</h2>
            <form onSubmit={handleLogSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  value={newLog.date}
                  onChange={(e) => setNewLog({ ...newLog, date: e.target.value })}
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-200"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bedtime</label>
                  <input
                    type="time"
                    value={newLog.bedtime}
                    onChange={(e) => setNewLog({ ...newLog, bedtime: e.target.value })}
                    className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Wake Time</label>
                  <input
                    type="time"
                    value={newLog.wakeTime}
                    onChange={(e) => setNewLog({ ...newLog, wakeTime: e.target.value })}
                    className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sleep Quality (1-10)
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={newLog.quality}
                  onChange={(e) => setNewLog({ ...newLog, quality: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Poor</span>
                  <span>Excellent</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  value={newLog.notes}
                  onChange={(e) => setNewLog({ ...newLog, notes: e.target.value })}
                  className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-200"
                  rows={3}
                  placeholder="How did you sleep? Any factors affecting your rest?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors"
              >
                Save Sleep Log
              </button>
            </form>
          </div>

          {/* Sleep History */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Sleep History</h2>
            <div className="space-y-4 max-h-[500px] overflow-y-auto">
              {sleepLogs.map((log, index) => (
                <div key={index} className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-gray-800">{log.date}</span>
                    <span className="text-sm text-gray-500">
                      {log.bedtime} - {log.wakeTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-600">Quality:</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: `${(log.quality / 10) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600">{log.quality}/10</span>
                  </div>
                  {log.notes && (
                    <p className="text-sm text-gray-600">{log.notes}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Relaxation Techniques */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Relaxation Techniques</h2>
            <button
              onClick={() => setShowRelaxationTips(!showRelaxationTips)}
              className="text-indigo-600 hover:text-indigo-700"
            >
              {showRelaxationTips ? 'Hide Tips' : 'Show Tips'}
            </button>
          </div>

          {showRelaxationTips && (
            <div className="grid md:grid-cols-3 gap-6">
              {relaxationTechniques.map((technique, index) => (
                <div key={index} className="bg-indigo-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    {technique.icon}
                    <h3 className="font-semibold text-gray-800">{technique.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{technique.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SleepHealth;