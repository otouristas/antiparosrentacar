import React from 'react';

interface LocationHeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

const LocationHero: React.FC<LocationHeroProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="relative h-[60vh] mt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationHero;