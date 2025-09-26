import React from 'react';

const CardGrid = () => {
  const cards = [
    {
      id: 1,
      title: "Easy With",
      subtitle: "Headphones",
      bgColor: "bg-gray-900",
      textColor: "text-white",
      buttonColor: "bg-red-500",
      image: "🎧",
      buttonText: "Discover"
    },
    {
      id: 2,
      title: "New",
      subtitle: "Collection",
      bgColor: "bg-yellow-500",
      textColor: "text-gray-900",
      buttonColor: "bg-gray-900",
      image: "👜",
      buttonText: "Shop Now"
    },
    {
      id: 3,
      title: "All Devices",
      subtitle: "Laptop",
      bgColor: "bg-red-500",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-gray-900",
      image: "💻",
      buttonText: "Explore"
    },
    {
      id: 4,
      title: "Best Gaming",
      subtitle: "Console",
      bgColor: "bg-gray-200",
      textColor: "text-gray-900",
      buttonColor: "bg-red-500",
      image: "🎮",
      buttonText: "Discover",
      isLarge: true
    },
    {
      id: 5,
      title: "Game",
      subtitle: "VR Headset",
      bgColor: "bg-green-500",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-gray-900",
      image: "🥽",
      buttonText: "Play Now"
    },
    {
      id: 6,
      title: "Amazon",
      subtitle: "Echo",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      buttonColor: "bg-white",
      buttonTextColor: "text-gray-900",
      image: "🔊",
      buttonText: "Listen"
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[500px]">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`
              ${card.bgColor} 
              ${card.textColor}
              rounded-2xl p-6 
              ${card.isLarge ? 'row-span-2' : ''}
               
              relative overflow-hidden
              transition-transform duration-300 hover:scale-105 hover:shadow-xl
              flex flex-col justify-between
            `}
          >
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-sm font-medium opacity-80 mb-1">
                {card.title}
              </h3>
              <h2 className="text-2xl font-bold mb-6">
                {card.subtitle}
              </h2>
              
              <button
                className={`
                  ${card.buttonColor} 
                  ${card.buttonTextColor || 'text-white'} 
                  px-6 py-2 rounded-full 
                  text-sm font-medium 
                  transition-all duration-200 
                  hover:transform hover:scale-105
                  shadow-lg
                  mt-12
                `}
              >
                {card.buttonText}
              </button>
            </div>

            {/* Image/Icon */}
            <div className="absolute bottom-4 right-4 text-6xl opacity-20">
              {card.image}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <div className="w-full h-full rounded-full border-2 border-current transform translate-x-8 -translate-y-8"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;