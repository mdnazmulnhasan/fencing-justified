import React from "react";

interface CardProps {
  title: string;
  description: string;
  img: string;
  bgColor?: string;
  highlightColor?: string;
  isMiddle?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  img,
  bgColor,
  highlightColor,
  isMiddle,
}) => {
  return (
    <div
      className={`relative p-6 rounded-[20px] shadow-sm overflow-hidden  ${
        bgColor ? bgColor : "bg-white"
      } ${isMiddle ? "md:-mt-8" : ""} ${bgColor ? "text-white" : "text-gray-900"}`}
    >
      {/* Highlight Glow */}
      <div
        className="absolute top-0 right-0 w-[180px] h-[180px] rounded-bl-[180px] blur-2xl pointer-events-none"
        style={{
          background: highlightColor,
          opacity: bgColor ? 0.7 : 1,
        }}
      ></div>

      {/* Icon */}
      <img src={img} alt="icon" className="w-10 h-10 mb-4 relative z-10" />

      {/* Heading */}
      <h2 className="text-2xl  font-bold mb-2 leading-snug relative z-10 ">{title}</h2>

      {/* Paragraph */}
      <p
        className={`text-[17px] leading-relaxed  relative z-10 ${
          bgColor ? "text-[#cbd5e1]" : "text-gray-700"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default Card;
