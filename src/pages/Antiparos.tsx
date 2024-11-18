import React from 'react';
import LocationHero from '../components/LocationHero';
import LocationWeather from '../components/LocationWeather';
import LocationSearch from '../components/LocationSearch';
import CarFleet from '../components/CarFleet';
import { Ship, Plane, Bus } from 'lucide-react';

const Antiparos = () => {
  return (
    <>
      <LocationHero
        title="Car Rental in Antiparos"
        description="Explore the beautiful island of Antiparos with our premium car rental service. From hidden beaches to traditional villages, discover everything at your own pace."
        imageUrl="https://images.unsplash.com/photo-1586019679315-b72b3bc10c7b?auto=format&fit=crop&q=80"
      />
      <LocationSearch />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Welcome to Antiparos Car Rental</h2>
          <p className="text-lg text-gray-600">
            Discover the charm of Antiparos with our reliable car rental service. Whether you're 
            exploring the famous Cave of Antiparos, relaxing at Soros Beach, or visiting the 
            Venetian Castle, we've got the perfect vehicle for your journey.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Get to Antiparos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Ship className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">By Ferry</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Regular ferries from Pounta (Paros) to Antiparos</li>
                <li>Journey time: 7 minutes</li>
                <li>Frequency: Every 30 minutes</li>
                <li>First ferry: 07:00</li>
                <li>Last ferry: 22:00</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <Plane className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Via Paros Airport</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Fly to Paros National Airport</li>
                <li>Take taxi to Pounta port (15 mins)</li>
                <li>Ferry to Antiparos (7 mins)</li>
                <li>We offer airport pickup service</li>
                <li>Total journey: ~30 minutes</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <Bus className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">From Parikia Port</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Bus service to Pounta port</li>
                <li>Journey time: 30 minutes</li>
                <li>Then take ferry to Antiparos</li>
                <li>We offer port pickup service</li>
                <li>Total journey: ~45 minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end">
            <LocationWeather
              location="Antiparos"
              temperature={26}
              condition="Sunny"
              humidity={65}
              windSpeed={12}
              seaTemperature={22}
            />
          </div>
        </div>
      </div>

      <CarFleet />
    </>
  );
};

export default Antiparos;