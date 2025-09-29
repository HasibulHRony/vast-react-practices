import React, { Suspense } from 'react';
import NavBar from './Components/NavBar/NavBar';
import PricingOptions from './Components/PricingOptions/PricingOptions';

const handlePricing = async () => {
  const fetchPricing = await fetch('/GymPrice.json')
  return fetchPricing.json()
}

const pricingPromise = handlePricing()

const App = () => {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main className='m-12'>
        <Suspense fallback={<p><span className="loading loading-dots loading-lg"></span></p>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  );
};

export default App;