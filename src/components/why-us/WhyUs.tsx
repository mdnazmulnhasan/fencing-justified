import React from "react";
import Card from "./Card";
import RoundButton from "../RoundButton/RoundButton";

const WhyUs = () => {
  return (
    <section className="my-16">
      <div className="text-center py-10 px-4 my-11">
        <h2 className="text-2xl font-semibold text-black mb-4">Why Us</h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-[15px] leading-relaxed">
          We specialize in delivering durable and innovative fencing solutions built to last.
          With a focus on quality and trust, we help secure spaces across industries and communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <Card
          img="/mesh5.jpg"
          title="Innovative and Di Range"
          description="We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style."
          highlightColor="linear-gradient(to bottom left, #4f9ee3, transparent)"
        />

        <Card
          img="/mesh5.jpg"
          title="Customer-Centric Approach"
          description="At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients."
          bgColor="bg-[#00264D]"
          highlightColor="#1B7FE1"
          isMiddle={true}
        />

        <Card
          img="/mesh5.jpg"
          title="Innovative and Di Range"
          description="We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style."
          highlightColor="linear-gradient(to bottom left, #4f9ee3, transparent)"
        />
      </div>

      <div className="flex justify-center mt-10"> <RoundButton>Contact us</RoundButton> </div>

    </section>
  );
};

export default WhyUs;








