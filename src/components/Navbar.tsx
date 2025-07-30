'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-sm bg-[#F2F4F6]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Links - Desktop */}
        <ul className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Right Section - Desktop */}
        <div className="hidden lg:flex items-center space-x-6 text-gray-700">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-4 text-gray-700 font-medium bg-[#F2F4F6] border-t">
          <ul className="space-y-4">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
            <li><Link href="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>

          <div className="flex items-center space-x-6 pt-4 border-t">
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
      )}
    </nav>
  );
}
