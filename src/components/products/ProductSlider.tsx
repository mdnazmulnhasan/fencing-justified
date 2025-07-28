'use client';

import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import ProductCard from './ProductCard';


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
        image: '/WhatsApp Image 2025-07-28 at 13.07.41_dfbfd9e8.jpg',
    },
    {
        id: 3,
        name: 'Steel Wire Mesh',
        priceRange: '₹2,000.00 – ₹8,500.00',
        image: '/image3.jpg',
    },
    {
        id: 4,
        name: 'Hexa Wire Mesh',
        priceRange: '₹1,500.00 – ₹7,500.00',
        image: '/mesh4.jpg',
    },
    {
        id: 5,
        name: 'Chain Link Mesh',
        priceRange: '₹2,500.00 – ₹9,000.00',
        image: '/mesh4.jpg',
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

            

            {/* Prev Button */}
            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-3 shadow hover:bg-gray-100 transition z-10"
            >
                <FaArrowLeft />
            </button>

            {/* Product List */}
            <div className="grid grid-cols-4 gap-6 w-full overflow-hidden">
                {visibleProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
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
