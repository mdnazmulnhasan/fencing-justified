import { FaStar, FaSmile, FaTruck } from 'react-icons/fa';

export default function TrustedSection() {
  return (
    <section className="relative w-full max-w-6xl mx-auto mt-10 rounded-xl overflow-hidden">
      {/* Background with radial light effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03357A] to-[#00254D]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_60%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white py-8 px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold mb-6">
          Trusted by over 6K+ customers
        </h2>

        {/* Features */}
        <div className="flex justify-center items-center gap-16 flex-wrap">
          {/* Premium Products */}
          <div className="flex flex-col items-center text-center">
            <FaStar className="text-3xl mb-2" />
            <p className="font-medium">Premium</p>
            <p className="text-sm text-gray-200">Products</p>
          </div>

          {/* Google Review */}
          <div className="flex flex-col items-center text-center">
            <FaSmile className="text-3xl mb-2" />
            <p className="font-medium">4000+</p>
            <p className="text-sm text-gray-200">Google Review</p>
          </div>

          {/* Delivery */}
          <div className="flex flex-col items-center text-center">
            <FaTruck className="text-3xl mb-2" />
            <p className="font-medium">Delivery</p>
            <p className="text-sm text-gray-200">Across India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
