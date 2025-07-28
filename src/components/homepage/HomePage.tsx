import React from 'react';
import ProductSlider from '../products/ProductSlider';
import SectionTitle from '../section-title/SectionTitle';
import TrustedSection from '../TrustedSection/TrustedSection';
import Card from '../why-us/Card';

const HomePage = () => {
    return (
        <section className='max-w-7xl mx-auto'>
            <SectionTitle align='left' title='Agricultural Products' />
            <ProductSlider />
            <TrustedSection/>
            <Card/>
        </section>
    );
};

export default HomePage;