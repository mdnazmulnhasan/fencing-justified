'use client';

import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function TestimonialCard() {
  return (
    <div className="w-[420px] bg-[#f7f7f7] rounded-xl p-6 shadow relative h-[300px] flex flex-col justify-between">
      {/* Quote icon background */}
      <div className="bg-[#d8f0b2] w-10 h-10 flex items-center justify-center rounded">
        <FaQuoteLeft className="text-[#7AC943] text-xl" />
      </div>

      {/* Testimonial text */}
      <p className="text-[#2d2d2d] text-[16px] mt-4 leading-[1.7]">
        I had initial issue with stock availability and delivery. Once the product arrived on site the work has
        completed very fast(400ft.) Value for money and easy to install. Happy with the product
      </p>

      {/* Footer with square grid background including arrows and name */}
      <div
        className="mt-6 px-4 py-2 rounded-md flex justify-between items-center"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6'%3E%3Crect width='2' height='2' fill='%23d4d4d4' /%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
        }}
      >
        {/* Name */}
        <p className="text-[#2d2d2d] font-semibold">- Samuel Varughese</p>

        {/* Arrows */}
        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
            <FaArrowLeft className="text-sm text-gray-600" />
          </button>
          <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
            <FaArrowRight className="text-sm text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
