


'use client';

import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import ProductCard from '../products/ProductCard';



const products = [
    {
        id: 1,
        name: 'Antiqo Fence',
        priceRange: '₹1,260.00 – ₹10,750.00',
        image: '/antiq.svg',
    },
    {
        id: 2,
        name: 'JF Australian Trellis',
        priceRange: '₹3,067.50 – ₹6,362.50',
        image: '/trellis.svg',
    },
    {
        id: 3,
        name: 'Steel Wire Mesh',
        priceRange: '₹2,000.00 – ₹8,500.00',
        image: '/polyhex.svg',
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
        image: '/grosswall.svg',
    },
];

export default function LandscapeProduct() {
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

    console.log(visibleProducts,'visible');
    
    return (
        <div className="relative w-full max-w-7xl mx-auto flex items-center">

            

            {/* Prev Button */}
            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-3 shadow hover:bg-gray-100 transition z-10"
            >
                <FaArrowLeft />
            </button>

            {/* Product List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full overflow-hidden">
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
