import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AdultYoga() {
  const navigate = useNavigate();

  const poses = [
    {
      name: "Cat-Cow Stretch (Marjaryasana-Bitilasana)",
      image: "https://rskr28.github.io/Project/catcow.jpg",
      benefit: "Cat-cow stretch is one of the best yoga poses for back pain and flexibility, Gary Soffer, M.D., an integrative medicine specialist at Yale Medicine, describes it as \"a gentle but dynamic set of two poses that helps loosen all of the back muscles.\" It does this by helping mobilize the joints in the spine.",
      howTo: [
        "Get on your hands and knees, with your neck in a neutral position.",
        "Keep your wrists directly under your shoulders and your knees directly under your hips.",
        "Inhaling into cow pose, arch your back so that your belly approaches the mat, lifting your chest and chin.",
        "Exhale into cat pose, drawing your navel in while rounding your back and letting gravity drop your head toward the floor."
      ]
    },
    {
      name: "Downward Facing Dog (Adho Mukha Shwanasana)",
      image: "https://rskr28.github.io/Project/dog.jpg",
      benefit: "Downward facing dog is one of the most versatile beginner yoga poses you can find. It not only helps with back pain and core strength, but also promotes flexibility from head to toe. It creates traction in the lower back, which takes pressure off the spine, according to Dr. Mukai. Meanwhile, your hamstrings and calves also get a good stretch.",
      howTo: [
        "Begin by resting your hands and knees on the floor.",
        "Press the balls of your feet into the floor and straighten your legs, raising your hips to the ceiling and pressing your shoulders down and back. Be mindful to not hyperextend your knees.",
        "Try bending one knee at a time to experience a deeper stretch through your hamstrings and calves."
      ]
    },
    {
      name: "Bridge Pose (Setu Bandha Sarvangasana)",
      image: "https://rskr28.github.io/Project/bridgepose.jpg",
      benefit: "Bridge pose promotes core and glute strength and, in doing so, helps prevent back pain. \"This pose simultaneously strengthens your core and your lower back muscles,\" says Dr. Soffer. \"The stronger your core, the less work your back needs to do.\" This pose is also beneficial because it stretches the front of the hips, which can get tight after sitting for long periods of time.",
      howTo: [
        "Lie on your back with your arms by your sides.",
        "With your feet about hip-width apart, bend your knees, keeping your feet flat on the floor directly under your knees.",
        "Engaging your core and glute muscles, raise your hips so that your body forms a straight line from your knees to your shoulders."
      ]
    },
    {
      name: "Cobbler's Pose (Baddha Konasana)",
      image: "https://rskr28.github.io/Project/baddhakonasana.jpg",
      benefit: "Also known as bound angle pose, this basic yoga pose helps with flexibility, according to Dr. Soffer. By letting gravity lower your knees, it opens up your hips. In fact, a study performed on people with diabetes showed that, in combination with other yoga asanas, it improved subjects' total cholesterol, blood glucose and overall sense of well-being.",
      howTo: [
        "Sitting with your legs extended in front of you, bend your knees and bring your heels toward your body.",
        "Let your knees fall out to either side while pressing the soles of your feet together.",
        "Draw your heels as close to your body as comfortably possible.",
        "Maintain an elongated spine, pressing your shoulders down and away from your ears."
      ]
    },
    {
      name: "Locust Pose (Salabhasana)",
      image: "https://rskr28.github.io/Project/locust.jpg",
      benefit: "Locust pose is great for both flexibility and back pain, says Rountree. It serves as an antidote to the forward hunched posture we so often adopt in our daily lives.",
      howTo: [
        "Lie on your stomach with your forehead on your mat and your arms at your sides, palms facing down.",
        "With your neck in a neutral position, arch your back and lift your chest, arms and legs off the floor.",
        "Raise your arms so they are parallel to the floor and stretch from your shoulders through your fingertips, keeping your gaze forward and your neck long.",
        "Maintain this position for three to five breath cycles, then return to the starting position."
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

      <h1 className="text-3xl font-bold text-center mb-12">Yoga Poses for Middle-Aged Adults</h1>
      
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
                  <h3 className="font-semibold text-gray-800 mb-2">Health Benefits:</h3>
                  <p className="text-gray-600">{pose.benefit}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">How to do it:</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    {pose.howTo.map((step, stepIndex) => (
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

export default AdultYoga;