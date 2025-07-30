'use client';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="relative max-w-7xl mx-auto bg-[#f6f7fa] p-8 flex flex-col md:flex-row items-center rounded-xl shadow">
      {/* Left Arrow */}
      <button className="absolute -left-4 top-1/2 -translate-y-1/2 bg-lime-400 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-lime-500 z-10">
        <FaArrowLeft size={14} />
      </button>

      {/* Product Image with Decorative Background */}
      <div className="md:w-1/2 md:h-[400px]  flex justify-center items-center relative" style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6'%3E%3Crect width='2' height='2' fill='%23d4d4d4' /%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat'
        }}>
        
       
        {/* Main Product Image */}
        <img
          src="/hero.svg" // <-- Your main hero image
          alt="JF Privezy Grass Wall"
          className="relative z-10 rounded-xl max-w-xs w-full "
        />
      </div>

      {/* Product Info */}
      <div className="md:w-1/2 w-full md:px-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          JF Privezy Grass <br /> Wall
        </h2>
        <p className="text-gray-500 mb-4">The Perfect Blend Of Greenery</p>
        <button className="bg-lime-400 hover:bg-lime-500 text-white font-semibold py-2 px-5 rounded-full text-sm transition">
          Shop Now
        </button>
      </div>

      {/* Right Arrow */}
      <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-lime-400 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-lime-500 z-10">
        <FaArrowRight size={14} />
      </button>
    </div>
  );
}
