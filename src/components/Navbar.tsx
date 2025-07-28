'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="w-full border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Links */}
        <ul className="flex items-center space-x-8 text-gray-700 font-medium">
          <li><Link href="/">Home</Link></li> 
          <li><Link href="/shop">Shop</Link></li>

          
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/contact">Contact</Link></li>
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
          <Link href="/login" className="flex items-center space-x-1">
            <span>Login</span>
            <FaUser className="text-lg" />
          </Link>
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
