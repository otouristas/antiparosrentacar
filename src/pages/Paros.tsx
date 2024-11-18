import React from 'react';
import LocationHero from '../components/LocationHero';
import LocationWeather from '../components/LocationWeather';
import CarFleet from '../components/CarFleet';

const Paros = () => {
  return (
    <>
      <LocationHero
        title="Car Rental in Paros"
        description="Experience the best of Paros with our premium car rental service. From Naoussa to Golden Beach, explore the island's beauty with comfort and style."
        imageUrl="https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&q=80"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose lg:prose-lg mx-auto">
          <h2>Premium Car Rental Services in Paros</h2>
          <p>
            Make your Paros experience unforgettable with our reliable car rental service. 
            We offer convenient pickup locations at Paros Airport and Parikia Port, making 
            it easy to start your journey as soon as you arrive.
          </p>
          <h3>Our Paros Services Include:</h3>
          <ul>
            <li>Airport and port pickup/drop-off</li>
            <li>VIP transfer services</li>
            <li>24/7 customer support</li>
            <li>Full insurance coverage</li>
            <li>GPS navigation systems</li>
          </ul>
        </div>
      </div>
      <LocationWeather
        location="Paros"
        temperature={25}
        condition="Partly Cloudy"
        humidity={70}
        windSpeed={15}
        seaTemperature={21}
      />
      <CarFleet />
    </>
  );
};

export default Paros;