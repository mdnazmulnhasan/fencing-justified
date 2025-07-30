'use client';
import React from 'react';

interface RoundButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const RoundButton: React.FC<RoundButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`mt-3 bg-[#B0DD1D] rounded-full text-black font-medium text-[14px] px-4 py-2 hover:bg-lime-500 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default RoundButton;
