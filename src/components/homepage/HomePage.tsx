import React from 'react';
import ProductSlider from '../products/ProductSlider';
import SectionTitle from '../section-title/SectionTitle';
import TrustedSection from '../TrustedSection/TrustedSection';
import WhyUs from '../why-us/WhyUs';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import ContactForm from '../ContactForm/ContactForm';
import CustomerLoveSection from '../CustomerLoveSection/CustomerLoveSection';
import Hero from '../Hero/Hero';
import LandscapeProduct from '../LandscapeProduct/LandscapeProduct';

const HomePage = () => {
    return (
        <section className='max-w-7xl mx-auto p-4'>
            <Hero />
            <SectionTitle align='left' title='Agricultural Products' />
            <ProductSlider />
            <div className='my-16'>
                <SectionTitle align='left' title='Landscape Products' />
                <LandscapeProduct />
            </div>
            <TrustedSection />
            <WhyUs />
            <CustomerLoveSection />
            <TestimonialCard />
            <ContactForm />
        </section>
    );
};

export default HomePage;