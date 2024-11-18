import React from 'react';
import { Car, Plane, Ship, Home, Shield, Tool, Headphones, CreditCard } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-16">
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive transportation and accommodation solutions for your Greek island adventure
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Car Rental Service */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Car className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Car Rental</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Wide range of vehicles</li>
              <li>Flexible rental periods</li>
              <li>Competitive rates</li>
              <li>Full insurance coverage</li>
              <li>GPS navigation available</li>
            </ul>
          </div>

          {/* VIP Transfers */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Plane className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">VIP Transfers</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Airport pickup and drop-off</li>
              <li>Port transfers</li>
              <li>Professional drivers</li>
              <li>Luxury vehicles</li>
              <li>24/7 availability</li>
            </ul>
          </div>

          {/* Port Services */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Ship className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Port Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Meet and greet service</li>
              <li>Luggage assistance</li>
              <li>Ferry terminal transfers</li>
              <li>Flexible scheduling</li>
              <li>Multiple locations</li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Home className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Accommodation</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Antiparos rooms to let</li>
              <li>Extended stay options</li>
              <li>Comfortable amenities</li>
              <li>Prime locations</li>
              <li>Competitive rates</li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Headphones className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Customer Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>24/7 assistance</li>
              <li>Multilingual staff</li>
              <li>WhatsApp support</li>
              <li>Emergency services</li>
              <li>Travel advice</li>
            </ul>
          </div>

          {/* Additional Features */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Additional Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Online booking system</li>
              <li>Secure payments</li>
              <li>Free cancellation</li>
              <li>Special offers</li>
              <li>Loyalty program</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;