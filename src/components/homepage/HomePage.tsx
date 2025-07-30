import React from 'react';
import ProductSlider from '../products/ProductSlider';
import SectionTitle from '../section-title/SectionTitle';
import TrustedSection from '../TrustedSection/TrustedSection';
import WhyUs from '../why-us/WhyUs';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const HomePage = () => {
    return (
        <section className='max-w-7xl mx-auto'>
            <SectionTitle align='left' title='Agricultural Products' />
            <ProductSlider />
            <TrustedSection/>
            <WhyUs/>
            <TestimonialCard/>
        </section>
    );
};

export default HomePage;