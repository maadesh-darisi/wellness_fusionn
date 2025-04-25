import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ChildrenYoga() {
  const navigate = useNavigate();
  
  const poses = [
    {
      name: "Ustrasana (Camel Pose)",
      image: "https://rskr28.github.io/Project/camelpose.jpg",
      description: "Among the best asanas for strengthening, energizing and stabilizing the body, Utrasana is a great beginner's pose. While there are many physical health benefits such as toughening back, thigh and buttock muscles and countering slouchiness, one of its major advantages is it will build confidence and empowerment in your adolescent.",
      howTo: "Begin with kneeling perpendicular to the floor and toes wide apart. Next, take a deep breath in and stretch your hands back with the fingers touching the heel. Hold this position for 5-10 breaths and then slowly exhale.",
      tip: "To gradually increase the stamina of your young one, initially make him/her hold the position for 3-5 breaths, then slowly increase the span."
    },
    {
      name: "Matsyasana (Fish Pose)",
      image: "https://rskr28.github.io/Project/fishpose.jpg",
      description: "Matsyasana stretches the muscle of the stomach, chest and lowers back. Improving the functionality of the digestive and cardiovascular systems, this asana also leads to better nutrient absorption, building your child's immunity.",
      howTo: "Begin by lying on the back, with feet together and hands alongside the body. Lift your body and gently curve the back till the head touches the ground. Concentrate on your breathing practice. Hold onto this position for a few seconds and then come back to the starting position.",
      tip: "It is important to ensure that this asana is practised early in the morning, hours after a meal."
    },
    {
      name: "Dhanurasana (Bow Pose)",
      image: "https://rskr28.github.io/Project/bowpose.jpg",
      description: "As parents, sometimes we forget that our children undergo stress too, so here is the perfect asana for their better mental health. It also helps increase the body's stamina by making the back and abdominal muscles flexible.",
      howTo: "Begin by lying down on your stomach with your feet apart, then fold your knees upwards and stretch your arms behind. Breathe in, lift your chest and look straight ahead. While in this position for 15-20 seconds, focus on your breathing.",
      tip: "If your child is uncomfortable touching the ankles, he/she can always start by using a strap."
    },
    {
      name: "Bhujangasana (Cobra Pose)",
      image: "https://rskr28.github.io/Project/cobrapose.jpg",
      description: "A great stress reliever too, the cobra pose improves digestion, bettering metabolism and removing any blockage. In the light of the pandemic, children's immunity is also a priority and this asana increases blood and oxygen circulation in the body, promising better nutrient absorption.",
      howTo: "Get down flat on your stomach with legs stretched out and feet facing down. Keep your elbows on your sides with palms flat on the surface. Next, take a deep breath, lift your chest and abdomen, placing all the body weight on the palms. Make sure the navel is touching the floor. Slowly release the breath and come back to the starting position. Do this 4-5 times.",
      tip: "When doing your adolescent is practising this asana, make sure he does not spread his/her legs, it could potentially injure the lower back."
    },
    {
      name: "Mandukasana (Frog Pose)",
      image: "https://rskr28.github.io/Project/pexels-yan-krukov-8613312%20(1).jpg",
      description: "Another animal-inspired pose that will be interesting to the children. This is a great asana for healing and promoting good gut health. It also increases the quantity of insulin in the body which has promising benefits.",
      howTo: "Sit comfortably and close the fists of both hands, clenching the thumb inside with fingers. Press the navel with your both fists and bend forward. Hold your breath and keep looking straight. Stay in this position for 60 seconds and repeat it three to four times.",
      tip: "It is usually recommended to start this position with Vajrayana, Balasana or Baddha Konasana."
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
      
      <h1 className="text-3xl font-bold text-center mb-12">Yoga Poses for Children (Ages 0-17)</h1>
      
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
                <p className="text-gray-600 mb-6">{pose.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">How To Do It:</h3>
                  <p className="text-gray-600">{pose.howTo}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Tip:</h3>
                  <p className="text-gray-600">{pose.tip}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChildrenYoga;