import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function SeniorYoga() {
  const navigate = useNavigate();

  const poses = [
    {
      name: "Baddha Konasana (Butterfly Pose)",
      image: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80",
      description: "In Sanskrit 'Baddha' means 'Bound', 'Kona' means 'Angle' and 'Asana' means 'Posture.'",
      steps: [
        "Sit on the floor with your legs and back straight and hands on the ground",
        "With an exhalation, bend your legs and bring the heels close to your pelvic region",
        "Now drop the knees from the outer sides and touch the soles of the feet together",
        "Lock your hands around the ankles or toes and stay in the pose for 4-5 minutes"
      ]
    },
    {
      name: "Shavasana (Corpse Pose)",
      image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80",
      description: "In Sanskrit 'Shava' means 'Corpse,' and 'Asana' means 'posture.'",
      steps: [
        "Lie down on your yoga mat with your arms and legs straight and relaxed. Here your body should be as flat as possible.",
        "Raise your knees to your chest so your back is straight. Then return the legs to the resting position while maintaining the back's posture.",
        "Relax the head and the back",
        "Inhale and exhale throughout the pose. Concentrate on each breath you take."
      ]
    },
    {
      name: "Adho Mukha Svanasana (Downward Facing Dog Pose)",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
      description: "The name is derived from the Sanskrit words 'Adhas' meaning 'Down', 'Mukha' meaning 'Face', 'Svana' meaning 'Dog', and 'Asana' meaning 'Posture'.",
      steps: [
        "In this pose, you need to make an inverted 'V' with hands and feet pressing into the ground and the hips being lifted towards the ceiling",
        "You need to hold the pose for a few seconds or until your body allows you to."
      ]
    },
    {
      name: "Trikonasana (Triangle Pose)",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
      description: "In Sanskrit, 'Tri' means 'Three', 'Kona' means 'Angle or Corners' and 'Asana' means 'Posture'.",
      steps: [
        "Stand erect. Next, lightly jump your feet 3-4 feet apart. Turn the right toes to the right wall and the left toes slightly inwards.",
        "Extend your arms at the shoulder level",
        "Now raise the left arm up and rest the right hand on your right ankle, or on the floor – to form a triangle",
        "Keeping the legs firm, breathe in and out",
        "Hold the pose for 30-40 seconds",
        "Release and perform the same procedure on the other side."
      ]
    },
    {
      name: "Tadasana (Mountain Pose)",
      image: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?auto=format&fit=crop&q=80",
      description: "In Sanskrit 'Tada' means 'Mountain' and 'Asana' means 'Pose.'",
      steps: [
        "Stand with your feet hip-width apart and both the arms straight by your side",
        "Spread your toes and press them into the floor",
        "Ensure you distribute the weight of your body evenly into both of your feet",
        "Align the head and the back",
        "With each inhalation, lengthen your spine and try to reach the crown of your head towards the sky",
        "Allow your shoulders to relax and try to reach your fingers toward the ground",
        "Continue this pose for 5-6 minutes."
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <button 
        onClick={() => navigate('/physical-wellness/classes')}
        className="flex items-center text-green-600 hover:text-green-700 mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Classes
      </button>

      <h1 className="text-3xl font-bold text-center mb-12">Yoga Asanas for Senior Adults</h1>
      
      <div className="space-y-12">
        {poses.map((pose, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={pose.image} 
                  alt={pose.name} 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{pose.name}</h2>
                <div className="mb-6">
                  <p className="text-gray-600 italic">{pose.description}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">How to Perform:</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    {pose.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="text-gray-600">{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeniorYoga;