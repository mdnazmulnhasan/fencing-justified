import React from 'react';

const WhyUs = () => {
    return (
        <section>
            <div className='grid grid-cols-3'>
                <div className="relative w-[300px] p-6 rounded-[20px] shadow-sm overflow-hidden">
                    {/* Top Right Color - Starts from Top Right */}
                    <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-gradient-to-bl from-[#4f9ee3] to-transparent rounded-bl-[180px] blur-2xl opacity-100"></div>

                    <img src={'/mesh5.jpg'} alt="mesh icon" className="w-10 h-10 mb-4 relative z-10" />

                    <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug relative z-10">
                        Innovative and Di Range
                    </h2>

                    <p className="text-sm text-gray-700 leading-relaxed relative z-10">
                        We offer a wide array of fencing solutions, including Polyhex Mesh,
                        Australian Trellis, and GI Poultry Mesh, catering to various needs from
                        agricultural to residential applications. Our products combine
                        functionality with aesthetic appeal, ensuring both security and style.
                    </p>
                </div>





                <div className="relative w-[300px] p-6 rounded-[20px] bg-[#00264D] text-white overflow-hidden shadow-md">
                    {/* Top-right gradient glow */}
                    <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#1B7FE1] rounded-bl-[150px] opacity-70 blur-3xl pointer-events-none"></div>

                    {/* Icon */}
                    <img src={'/mesh5.jpg'} alt="customer icon" className="w-10 h-10 mb-4 z-10 relative" />

                    {/* Heading */}
                    <h2 className="text-lg font-bold mb-2 z-10 relative">Customer-Centric Approach</h2>

                    {/* Paragraph */}
                    <p className="text-sm text-[#cbd5e1] leading-relaxed z-10 relative">
                        At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.
                    </p>
                </div>


                <div className="relative w-[300px] p-6 rounded-[20px] shadow-sm overflow-hidden">
                    {/* Top Right Color - Starts from Top Right */}
                    <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-gradient-to-bl from-[#4f9ee3] to-transparent rounded-bl-[180px] blur-2xl opacity-100"></div>

                    <img src={'/mesh5.jpg'} alt="mesh icon" className="w-10 h-10 mb-4 relative z-10" />

                    <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug relative z-10">
                        Innovative and Di Range
                    </h2>

                    <p className="text-sm text-gray-700 leading-relaxed relative z-10">
                        We offer a wide array of fencing solutions, including Polyhex Mesh,
                        Australian Trellis, and GI Poultry Mesh, catering to various needs from
                        agricultural to residential applications. Our products combine
                        functionality with aesthetic appeal, ensuring both security and style.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;