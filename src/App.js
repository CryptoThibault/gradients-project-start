import GradientsHeader from './components/GradientsHeader';
import GradientsApp from './components/GradientsApp';
import Footer from './components/Footer';
import { gradients, uniqueTags } from './gradients';
import React, { useState } from 'react';

function App() {
  const [gradientList, setGradientList] = useState(gradients);

  const filterGradients = (tag) => {
    setGradientList(
      gradients.filter((gradient) => gradient.tags.includes(tag))
    );
  };

  return (
    <React.Fragment>
      <GradientsHeader gradients={gradients} >
        <h1 className='display-1 text-center my-4'>Alyra Gradients</h1>
        <p className='tagline'>Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <GradientsApp
        gradients={gradientList}
        uniqueTags={uniqueTags}
        filterGradients={filterGradients}
      />
      <Footer />
    </React.Fragment>
  );
}

export default App;