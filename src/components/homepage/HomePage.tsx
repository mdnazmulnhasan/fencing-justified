import React from 'react';
import ProductSlider from '../products/ProductSlider';
import SectionTitle from '../section-title/SectionTitle';
import TrustedSection from '../TrustedSection/TrustedSection';

const HomePage = () => {
    return (
        <section className='max-w-7xl mx-auto'>
            <SectionTitle align='left' title='Agricultural Products' />
            <ProductSlider />
            <TrustedSection/>
        </section>
    );
};

export default HomePage;