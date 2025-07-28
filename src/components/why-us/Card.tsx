import React from "react";

const Card = () => {
  return (
    <div className="relative w-[300px] p-6 rounded-[20px] shadow-sm overflow-hidden">
      {/* Top Right Color - Starts from Top Right */}
      <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-gradient-to-bl from-[#4f9ee3] to-transparent rounded-bl-[180px] blur-2xl opacity-100"></div>

      <img src={'/mesh5.jpg'} alt="mesh icon" className="w-10 h-10 mb-4 relative z-10" />

      <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug relative z-10">
        Innovative and Di Range
      </h2>

      <p className="text-sm text-gray-700 leading-relaxed relative z-10">
        We offer a wide array of fencing solutions, including Polyhex Mesh,
        Australian Trellis, and GI Poultry Mesh, catering to various needs from
        agricultural to residential applications. Our products combine
        functionality with aesthetic appeal, ensuring both security and style.
      </p>
    </div>
  );
};

export default Card;
