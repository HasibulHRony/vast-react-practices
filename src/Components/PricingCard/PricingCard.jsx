import React from 'react';
import Feature from '../Feature/Feature';
import Cost from '../PricingOptions/PricingOptions'

const PricingCard = ({ Cost }) => {
    console.log(Cost)
    const {package_name, features, description, price} = Cost
    return (
        <div className='border-2 border-green-500 p-4'>
            <h2 className='text-center text-xl'>{package_name}</h2>
            <p className='text-sm text-justify'>{description}</p>
            <div>
                <ul className='mt-2'>
                {
                    features.map((feature, index)=><Feature key={index} feature={feature}></Feature>)
                }
                </ul>
            </div>
            <div className='text-right text-blue-700'>
                <span className='bg-yellow-300 px-4 py-2 rounded-2xl'>{price}</span>
            </div>
        </div>
    );
};

export default PricingCard;