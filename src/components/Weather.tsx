import React from 'react';
import { Sun, Cloud, CloudRain, Wind } from 'lucide-react';

const Weather = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Local Weather</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Antiparos', 'Paros', 'Piraeus'].map((location) => (
            <div key={location} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">{location}</h3>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Sun className="h-8 w-8 text-yellow-500 mr-3" />
                  <span className="text-3xl font-bold">26°C</span>
                </div>
                <span className="text-gray-600">Sunny</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Humidity</span>
                  <span>65%</span>
                </div>
                <div className="flex justify-between">
                  <span>Wind</span>
                  <span>12 km/h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sea Temperature</span>
                  <span>22°C</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Weather;