export default function ContactForm() {
  return (
    <section> 
    <div className="max-w-md bg-[#002b5c] text-white rounded-2xl p-6">
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

      {/* Name */}
      <input
        type="text"
        placeholder="Your Name"
        className="w-full bg-[#0e3b66] text-white placeholder:text-gray-300 p-3 rounded-full mb-4 outline-none"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="w-full bg-[#0e3b66] text-white placeholder:text-gray-300 p-3 rounded-full mb-4 outline-none"
      />

      {/* Phone */}
      <input
        type="tel"
        placeholder="Phone *"
        className="w-full bg-[#0e3b66] text-white placeholder:text-gray-300 p-3 rounded-full mb-4 outline-none"
      />

      {/* Message */}
      <textarea
        rows="4"
        placeholder="Write message"
        className="w-full bg-[#0e3b66] text-white placeholder:text-gray-300 p-3 rounded-2xl mb-6 outline-none resize-none"
      ></textarea>

      {/* Submit Button */}
      <button className="bg-[#c1fa00] text-black font-semibold py-2 px-6 rounded-full">
        Submit
      </button>
    </div>
    </section>
  );
}
