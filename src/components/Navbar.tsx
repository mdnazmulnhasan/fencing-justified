'use client';

import Image from 'next/image';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="w-full border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Links */}
        <ul className="flex items-center space-x-8 text-gray-700 font-medium">
          <li><a href="/">Home</a></li> 
          <li><a href="/shop">Shop</a></li>

          
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png" // Place your image inside public folder
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 text-gray-700">
          <a href="/login" className="flex items-center space-x-1">
            <span>Login</span>
            <FaUser className="text-lg" />
          </a>
          <FaSearch className="text-lg cursor-pointer" />
          <div className="relative">
            <FaShoppingCart className="text-lg cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
