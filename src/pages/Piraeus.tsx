import React from 'react';
import LocationHero from '../components/LocationHero';
import LocationWeather from '../components/LocationWeather';
import CarFleet from '../components/CarFleet';

const Piraeus = () => {
  return (
    <>
      <LocationHero
        title="Car Rental in Piraeus"
        description="Start your Greek adventure from Piraeus with our reliable car rental service. Perfect for both mainland exploration and island hopping."
        imageUrl="https://images.unsplash.com/photo-1597933534024-debb6104af15?auto=format&fit=crop&q=80"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose lg:prose-lg mx-auto">
          <h2>Your Gateway to Greek Adventures</h2>
          <p>
            As the main port of Athens, Piraeus is the perfect starting point for your 
            Greek journey. Our car rental service provides you with the freedom to explore 
            the mainland or catch ferries to the islands with ease.
          </p>
          <h3>Advantages of Our Piraeus Location:</h3>
          <ul>
            <li>Minutes away from the ferry terminals</li>
            <li>Easy access to Athens attractions</li>
            <li>Flexible pickup and return times</li>
            <li>Wide range of vehicles</li>
            <li>Multilingual staff</li>
          </ul>
        </div>
      </div>
      <LocationWeather
        location="Piraeus"
        temperature={24}
        condition="Clear"
        humidity={60}
        windSpeed={10}
        seaTemperature={20}
      />
      <CarFleet />
    </>
  );
};

export default Piraeus;