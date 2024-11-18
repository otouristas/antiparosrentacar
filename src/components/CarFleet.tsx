import React from 'react';
import { Car } from 'lucide-react';

interface CarType {
  name: string;
  category: string;
  price: number;
  features: string[];
  imageUrl: string;
}

const CarFleet: React.FC = () => {
  const cars: CarType[] = [
    {
      name: "Toyota Yaris",
      category: "Economy",
      price: 35,
      features: ["5 Seats", "Manual", "A/C", "Bluetooth"],
      imageUrl: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Volkswagen Golf",
      category: "Compact",
      price: 45,
      features: ["5 Seats", "Automatic", "A/C", "GPS"],
      imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Mercedes C-Class",
      category: "Premium",
      price: 75,
      features: ["5 Seats", "Automatic", "A/C", "Leather"],
      imageUrl: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Fleet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={car.imageUrl} 
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{car.name}</h3>
                  <span className="text-blue-600 font-bold">€{car.price}/day</span>
                </div>
                <p className="text-gray-600 mb-4">{car.category}</p>
                <ul className="space-y-2">
                  {car.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Car className="h-4 w-4 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarFleet;