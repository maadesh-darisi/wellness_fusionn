import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Leaf, Brain, Dumbbell, Calendar, Target, Heart, MessageSquare, Puzzle, Flower2, Sparkles, Moon } from 'lucide-react';
import MindfulGarden from '../components/games/MindfulGarden';
import EmotionFlow from '../components/games/EmotionFlow';
import MemoryMandala from '../components/games/MemoryMandala';
import ProfileButton from '../components/ProfileButton';

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state?.userEmail || 'guest@example.com';
  const [mood, setMood] = useState<string>('');
  const [showMoodRecommendations, setShowMoodRecommendations] = useState(false);
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState<{ message: string; timestamp: string; }[]>([
    {
      message: "Remember to breathe. It's just a bad day, not a bad life.",
      timestamp: "2 hours ago"
    },
    {
      message: "Today I completed my first full meditation session. Small steps, big impact!",
      timestamp: "5 hours ago"
    },
    {
      message: "Gratitude turns what we have into enough. 🙏",
      timestamp: "1 day ago"
    }
  ]);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [wellnessScore, setWellnessScore] = useState(0);

  const handleMentalWellness = () => {
    window.open('https://mymithra-chat.netlify.app/', '_blank', 'noopener,noreferrer');
  };

  const getMoodRecommendations = () => {
    const recommendations = {
      Tired: {
        poses: ['Child\'s Pose', 'Legs Up the Wall', 'Supported Bridge Pose'],
        description: 'Gentle, restorative poses to rejuvenate your energy',
        tone: 'bg-blue-50'
      },
      Stressed: {
        poses: ['Cat-Cow Stretch', 'Forward Fold', 'Seated Twist'],
        description: 'Calming poses to release tension and promote relaxation',
        tone: 'bg-green-50'
      },
      Energetic: {
        poses: ['Sun Salutations', 'Warrior Poses', 'Standing Balance Poses'],
        description: 'Dynamic poses to channel your energy positively',
        tone: 'bg-orange-50'
      }
    };

    return recommendations[mood as keyof typeof recommendations];
  };

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([
        {
          message: newPost,
          timestamp: 'Just now'
        },
        ...posts
      ]);
      setNewPost('');
    }
  };

  const clearPosts = () => {
    setPosts([]);
  };

  const updateWellnessScore = (points: number) => {
    setWellnessScore(prev => prev + points);
  };

  const games = [
    {
      title: 'Mindful Garden',
      description: 'Nurture a virtual zen garden by practicing daily mindfulness exercises. Watch your garden grow as you maintain your meditation streak.',
      benefits: 'Improves focus, reduces stress, and builds consistent mindfulness habits',
      icon: <Flower2 className="w-12 h-12 text-pink-500" />,
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80'
    },
    {
      title: 'Emotion Flow',
      description: 'Guide colorful energy orbs through peaceful landscapes by matching emotions with their corresponding coping strategies.',
      benefits: 'Enhances emotional awareness and teaches healthy coping mechanisms',
      icon: <Sparkles className="w-12 h-12 text-purple-500" />,
      image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80'
    },
    {
      title: 'Memory Mandala',
      description: 'A peaceful memory game where you match pairs of mandala patterns while practicing mindfulness.',
      benefits: 'Strengthens memory while maintaining a calm, focused state',
      icon: <Puzzle className="w-12 h-12 text-amber-500" />,
      image: 'https://images.unsplash.com/photo-1512757776214-26d36777b513?auto=format&fit=crop&q=80'
    }
  ];

  const renderSelectedGame = () => {
    switch (selectedGame) {
      case 'Mindful Garden':
        return <MindfulGarden onClose={() => setSelectedGame(null)} onComplete={() => updateWellnessScore(10)} />;
      case 'Emotion Flow':
        return <EmotionFlow onClose={() => setSelectedGame(null)} onComplete={() => updateWellnessScore(5)} />;
      case 'Memory Mandala':
        return <MemoryMandala onClose={() => setSelectedGame(null)} onComplete={() => updateWellnessScore(6)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="absolute top-4 right-4 z-50">
        <ProfileButton email={userEmail} wellnessScore={wellnessScore} />
      </div>
      {renderSelectedGame()}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="w-12 h-12 text-green-500" />
            <h1 className="text-5xl font-bold text-gray-800">WELCOME TO WELLNESS FUSION</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Begin your transformative journey towards holistic well-being. Choose your path to wellness and discover the perfect balance for your mind and body.
          </p>
        </div>

        {/* Mood-Based Recommendations */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">How are you feeling today?</h2>
          <div className="flex gap-4 mb-6">
            {['Tired', 'Stressed', 'Energetic'].map((moodOption) => (
              <button
                key={moodOption}
                onClick={() => {
                  setMood(moodOption);
                  setShowMoodRecommendations(true);
                }}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  mood === moodOption
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {moodOption}
              </button>
            ))}
          </div>
          {showMoodRecommendations && mood && (
            <div className={`p-6 rounded-lg ${getMoodRecommendations().tone}`}>
              <h3 className="font-semibold text-gray-800 mb-2">Recommended Poses:</h3>
              <p className="text-gray-600 mb-4">{getMoodRecommendations().description}</p>
              <ul className="space-y-2">
                {getMoodRecommendations().poses.map((pose, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-green-500" />
                    <span>{pose}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Wellness Games */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Wellness Games</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    {game.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{game.title}</h3>
                  <p className="text-gray-600 mb-4">{game.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Benefits:</span> {game.benefits}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedGame(game.title)}
                    className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors"
                  >
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Wall */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl font-bold text-gray-800">Community Wellness Wall</h2>
            </div>
            <button
              onClick={clearPosts}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Clear All
            </button>
          </div>
          <form onSubmit={handlePostSubmit} className="mb-6">
            <div className="flex gap-4">
              <input
                type="text"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share your wellness journey..."
                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-200 focus:border-purple-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                Share
              </button>
            </div>
          </form>
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={index} className="p-4 bg-purple-50 rounded-lg">
                <p className="text-gray-700 mb-2">{post.message}</p>
                <p className="text-sm text-gray-500">{post.timestamp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Navigation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <button
            onClick={handleMentalWellness}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="p-8">
              <Brain className="w-16 h-16 text-indigo-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Mental Wellness</h2>
              <p className="text-gray-600">
                Explore meditation, mindfulness, and emotional balance techniques.
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate('/physical-wellness')}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="p-8">
              <Dumbbell className="w-16 h-16 text-green-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Physical Wellness</h2>
              <p className="text-gray-600">
                Discover personalized fitness routines and holistic health practices.
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate('/sleep-health')}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="p-8">
              <Moon className="w-16 h-16 text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Sleep Health</h2>
              <p className="text-gray-600">
                Track sleep patterns and develop healthy bedtime routines.
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate('/wellness-challenges')}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="p-8">
              <Target className="w-16 h-16 text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Wellness Challenges</h2>
              <p className="text-gray-600">
                Join monthly themed challenges for mind and body.
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;