import { ArrowRight } from 'lucide-react';
import bhc from "../assets/bhc.jpeg";
import bhc1 from "../assets/bhc1.jpeg";
const Cards = () => {
  const cardData = [
    {
      title: "Biggest Health Challenge ™",
      description: "The primary health challenge today is maintaining consistency in healthy habits. Despite awareness of exercise, diet, and preventive care benefits, many struggle with motivation and resource access. This leads to preventable health issues and higher healthcare costs.",
      imageUrl: bhc,
      link: "#",
    },
    {
      title: "Bimaflow",
      description: "BimaFlow is ApertaCura's flagship product, designed to seamlessly integrate health and wellness into everyday life. It is a hybrid wellness platform that connects individuals with health insuranceproviders while incentivizing and rewarding healthy behaviors.",
      imageUrl: bhc1,
      link: "https://bimaflow.apertacura.com/",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Image Container */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Content Container */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {card.description}
              </p>
              
              {/* Link */}
              <a 
                href={card.link}
                className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors"
              >
                Learn More 
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;