'use client';

import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  priceRange: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow">
      <Image
        src={product.image}
        alt={product.name}
        width={250}
        height={150}
        className="rounded-md object-cover"
      />
      <h3 className="mt-3 font-semibold text-gray-800">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm">{product.priceRange}</p>
      <button className="mt-3 bg-[#B0DD1D] rounded-full text-black font-medium px-4 py-2 hover:bg-lime-500 transition">
        Shop Now
      </button>
    </div>
  );
}
