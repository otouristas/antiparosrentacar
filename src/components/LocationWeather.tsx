import React from 'react';
import { Sun, Wind } from 'lucide-react';

interface LocationWeatherProps {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  seaTemperature: number;
}

const LocationWeather: React.FC<LocationWeatherProps> = ({
  location,
  temperature,
  condition,
  humidity,
  windSpeed,
  seaTemperature
}) => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Current Weather in {location}</h2>
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Sun className="h-12 w-12 text-yellow-500 mr-4" />
                <span className="text-4xl font-bold">{temperature}°C</span>
              </div>
              <span className="text-lg text-gray-600">{condition}</span>
            </div>
            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between items-center">
                <span>Humidity</span>
                <span className="font-medium">{humidity}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Wind Speed</span>
                <div className="flex items-center">
                  <Wind className="h-4 w-4 mr-1" />
                  <span className="font-medium">{windSpeed} km/h</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Sea Temperature</span>
                <span className="font-medium">{seaTemperature}°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationWeather;