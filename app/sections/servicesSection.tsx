import React from 'react';
import PriceList from './services/priceList';

const ServicesSection = () => {
    return (
        <section className='container mx-auto space-y-6'>
            <h3 className='text-3xl lg:text-6xl text-center mt-3 font-bold'>Услуги, достойные вашей индивидуальности</h3>
            <PriceList></PriceList>
        </section>
    );
};

export default ServicesSection;