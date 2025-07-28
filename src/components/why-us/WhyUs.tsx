// import React from "react";
// import Card from "./Card";

// const WhyUs = () => {
//   return (
//     <section className="my-16">
//       <div className="grid grid-cols-3 gap-16">
//         <Card
//           img="/mesh5.jpg"
//           title="Innovative and Di Range"
//           description="We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style."
//           highlightColor="linear-gradient(to bottom left, #4f9ee3, transparent)"
//         />

//         <Card
//           img="/mesh5.jpg"
//           title="Customer-Centric Approach"
//           description="At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients."
//           bgColor="bg-[#00264D]"
//           highlightColor="#1B7FE1"
//           isMiddle={true}
//         />

//         <Card
//           img="/mesh5.jpg"
//           title="Innovative and Di Range"
//           description="We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style."
//           highlightColor="linear-gradient(to bottom left, #4f9ee3, transparent)"
//         />
//       </div>
//     </section>
//   );
// };

// export default WhyUs;













import React from "react";
import Card from "./Card";
// import "./WhyUs.css"; // Import the CSS file

const WhyUs = () => {
  return (
    <section className="why-us-section">
      <div className="why-us-grid">
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
    </section>
  );
};

export default WhyUs;


