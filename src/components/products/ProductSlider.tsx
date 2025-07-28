'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'GI Poultry Mesh',
    priceRange: '₹1,260.00 – ₹10,750.00',
    image: '/image.png', // Put actual images inside public/
  },
  {
    id: 2,
    name: 'JF Bluelink Mesh',
    priceRange: '₹3,067.50 – ₹6,362.50',
    image: '/mesh2.png',
  },
  {
    id: 3,
    name: 'Steel Wire Mesh',
    priceRange: '₹2,000.00 – ₹8,500.00',
    image: '/mesh3.png',
  },
];

export default function ProductSlider() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % products.length);
  };

  const visibleProducts = products.slice(startIndex, startIndex + 2);

  return (
    <div className="relative w-full max-w-4xl mx-auto flex items-center">
      {/* Slider Container */}
      <div className="flex gap-6">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-xl p-4 w-64 flex-shrink-0 shadow"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={150}
              className="rounded-md object-cover"
            />
            <h3 className="mt-3 font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.priceRange}</p>
            <button className="mt-3 bg-lime-400 text-black font-medium px-4 py-2 rounded hover:bg-lime-500 transition">
              Shop Now
            </button>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-[-20px] bg-white border rounded-full p-3 shadow hover:bg-gray-100 transition"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
