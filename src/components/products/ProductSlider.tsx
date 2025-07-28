'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'GI Poultry Mesh',
    priceRange: '₹1,260.00 – ₹10,750.00',
    image: '/image.png',
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
  {
    id: 4,
    name: 'Hexa Wire Mesh',
    priceRange: '₹1,500.00 – ₹7,500.00',
    image: '/mesh4.png',
  },
  {
    id: 5,
    name: 'Chain Link Mesh',
    priceRange: '₹2,500.00 – ₹9,000.00',
    image: '/mesh5.png',
  },
];

export default function ProductSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 4;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const visibleProducts = [
    ...products.slice(startIndex, startIndex + itemsToShow),
    ...products.slice(0, Math.max(0, startIndex + itemsToShow - products.length)),
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto flex items-center px-4">
      {/* Prev btn */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-3 shadow hover:bg-gray-100 transition z-10"
      >
        <FaArrowLeft />
      </button>

      {/* Slider Container */}
      <div className="grid grid-cols-4 gap-6 w-full overflow-hidden">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-xl p-4 shadow flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={150}
              className="rounded-md object-cover"
            />
            <h3 className="mt-3 font-semibold text-gray-800 text-center">
              {product.name}
            </h3>
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
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-3 shadow hover:bg-gray-100 transition z-10"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
