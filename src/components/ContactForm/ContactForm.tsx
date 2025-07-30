import CitySelector from "../CitySelector/CitySelector";
import RoundButton from "../RoundButton/RoundButton";

export default function ContactForm() {
    return (
        <section className=" bg-white border-2 border-gray-200 rounded-2xl relative my-16">
            <div className="absolute -top-8 flex justify-center w-full">
                <RoundButton> Our Branches </RoundButton>
            </div>

            <div className="p-2 ">
                <CitySelector />
                <div className="grid grid-cols-1 md:grid-cols-[448px_1fr] gap-6 ">
                    {/* Contact Form */}
                    <div className=" bg-[#002b5c] text-white rounded-2xl p-6 w-full">
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
                            rows={4}
                            placeholder="Write message"
                            className="w-full bg-[#0e3b66] text-white placeholder:text-gray-300 p-3 rounded-2xl mb-6 outline-none resize-none"
                        ></textarea>

                        {/* Submit Button */}
                        <button className="bg-[#c1fa00] text-black font-semibold py-2 px-6 rounded-full">
                            Submit
                        </button>
                    </div>

                    {/* Map */}
                    <div className="w-full  h-[500px] rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            title="Bangalore Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.936071592303!2d77.59456261482244!3d12.971598590855371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c79d7a67%3A0xced7eefa0b911aa0!2sBangalore!5e0!3m2!1sen!2sin!4v1625237084229!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
