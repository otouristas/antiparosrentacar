import React from 'react';
import { Search } from 'lucide-react';

const LocationSearch = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Pick-up Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Return Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>All Vehicles</option>
              <option>Economy</option>
              <option>Compact</option>
              <option>Premium</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
              <Search className="h-4 w-4 mr-2" />
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LocationSearch;