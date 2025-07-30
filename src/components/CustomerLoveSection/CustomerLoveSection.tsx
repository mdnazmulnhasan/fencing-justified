// components/CustomerLoveSection.jsx
'use client';
import { FaBuilding } from 'react-icons/fa';

const features = [
  { text: 'Quality Product', icon: <FaBuilding /> },
  { text: 'Shipping Across India', icon: <FaBuilding /> },
];

export default function CustomerLoveSection() {
  return (
    <div className="relative overflow-hidden my-16">
      {/* Slanted Banner */}
      <div className="w-[200%] bg-blue-100 rotate-[-2deg] absolute left-[-50%] top-12 z-10">
        <div className="flex  gap-10 py-4 justify-center animate-marquee whitespace-nowrap text-blue-900 font-medium text-sm">
          {Array(10)
            .fill(null)
            .map((_, index) =>
              features.map((feature, idx) => (
                <div key={`${index}-${idx}`} className="flex items-center gap-2 mx-2">
                  <span className="text-lg">{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))
            )}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 pt-24 text-center mt-16">
        <h2 className="text-2xl font-semibold">
          Why Customers Love <span className="ml-1">Us?</span>
        </h2>
      </div>
    </div>
  );
}
