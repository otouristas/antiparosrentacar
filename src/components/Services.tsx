import React from 'react';
import { Car, Plane, Home, Ship } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "Premium Car Rentals",
      description: "Wide selection of vehicles for all your travel needs in Antiparos, Paros & Piraeus"
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "VIP Airport Transfers",
      description: "Luxury transfers to and from Paros Airport with professional drivers"
    },
    {
      icon: <Ship className="h-8 w-8" />,
      title: "Port Pickup Service",
      description: "Convenient pickup and drop-off at all major ports"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Antiparos Accommodation",
      description: "Comfortable rooms to let for extended stays in Antiparos"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Premium Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;