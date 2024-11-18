import React from 'react';
import { Shield, Users, Clock, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">About Aggelos Rentals</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner for car rentals and VIP transfers in Antiparos, Paros, and Piraeus since 1990.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose lg:prose-lg mx-auto">
          <h2>Our Story</h2>
          <p>
            For over three decades, Aggelos Rentals has been providing exceptional car rental services
            across the Greek islands. What started as a small family business in Antiparos has grown
            into a trusted name in the transportation industry, serving thousands of satisfied customers
            each year.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12 not-prose">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">Well-maintained fleet and professional service</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-600">Over 30 years of industry expertise</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer assistance</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">Premium vehicles and services</p>
            </div>
          </div>

          <h2>Our Mission</h2>
          <p>
            Our mission is to provide exceptional car rental and transfer services that enhance our
            customers' travel experiences. We strive to offer reliable, comfortable, and affordable
            transportation solutions while maintaining the highest standards of customer service.
          </p>

          <h2>Our Team</h2>
          <p>
            Our dedicated team of professionals brings years of experience in the car rental and
            tourism industry. From our friendly customer service representatives to our skilled
            maintenance staff, every member of our team is committed to ensuring your complete
            satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;