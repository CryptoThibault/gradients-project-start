import GradientsHeader from './components/GradientsHeader';
import GradientsApp from './components/GradientsApp';
import Footer from './components/Footer';
import { gradients, uniqueTags } from './gradients';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <GradientsHeader gradients={gradients} />
      <GradientsApp
        gradients={gradients}
        uniqueTags={uniqueTags}
      />
      <Footer />
    </React.Fragment>
  );
}

export default App;