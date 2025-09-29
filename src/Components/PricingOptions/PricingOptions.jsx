import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const prices = use(pricingPromise)
    
    return (
        <div className='text-center'>
            <h1 className='text-2xl'>Purchase Your Plan...</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    prices.map((Cost, index)=><PricingCard key={index} Cost={Cost}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;