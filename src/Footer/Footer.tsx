// components/Footer.jsx
export default function Footer() {
  return (
    <div className="bg-[#032c5c] text-white rounded-2xl p-4 md:p-10 md:flex justify-between items-start flex-wrap gap-10">
      {/* Left Section */}
      <div className="flex-1 min-w-[280px]">
        <h2 className="text-lg font-semibold mb-2">Join Our JF Products</h2>
        <p className="text-sm mb-4 text-gray-300">
          We’ll tell you about store updates and discounts
        </p>

        {/* Email Input */}
        <div className="bg-[#0e3b66] p-2 rounded-full mb-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent outline-none text-white placeholder:text-gray-400 px-2"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-4">
          <input type="checkbox" id="newsletter" className="mr-2 accent-[#0e3b66]" />
          <label htmlFor="newsletter" className="text-sm text-gray-300">
            Yes, subscribe me to your newsletter.
          </label>
        </div>

        {/* Join Now Button */}
        <button className="bg-white text-black font-semibold py-2 px-6 rounded-full w-full">
          Join Now
        </button>
      </div>

      {/* Center Section - Navigation */}
      <div className="flex-1 min-w-[150px] mt-10 md:mt-0">
        <h3 className="text-lg font-semibold mb-4">Information</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>Home</li>
          <li>Shop</li>
          <li>Our Story</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Right Section - Helpful Links */}
      <div className="flex-1 min-w-[150px] mt-10 md:mt-0">
        <h3 className="text-lg font-semibold mb-4">Helpful</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>FAQs</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Shipping Policy</li>
          <li>My Account</li>
        </ul>
      </div>

      {/* Bottom Section with Logo & Contact */}
      <div className="flex justify-between items-center w-full mt-10 flex-wrap gap-4">
        {/* Logo & Branches */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="w-14 h-14 object-contain"
          />
          <div className="text-sm text-gray-300">
            <p className="font-semibold text-white">Our Branches</p>
            <p>Coimbatore, Chennai, Hyderabad, Goa, Kochi</p>
          </div>
        </div>

        {/* Contact Us Button */}
        <button className="bg-[#c1fa00] text-black font-semibold py-2 px-6 rounded-full">
          Contact Us
        </button>
      </div>
    </div>
  );
}
