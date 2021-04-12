import GradientsHeader from './components/GradientsHeader';
import GradientsApp from './components/GradientsApp';
import Footer from './components/Footer';
import { gradients, uniqueTags } from './gradients';
import React, { useState } from 'react';

const App = () =>{
  const [gradientList, setGradientList] = useState(gradients);

  const filterGradients = (tag) => {
    if (tag === 'all') { setGradientList(gradients) }
    else {
      setGradientList(
        gradients.filter((gradient) => gradient.tags.includes(tag))
      );
    };
  };
  return (
    <React.Fragment>
      <GradientsHeader gradients={gradients} />
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