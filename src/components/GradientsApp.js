import { useState } from 'react';
import GradientsList from './GradientsList';
import GradientsSelect from './GradientsSelect';

const GradientsApp = ({ gradients, uniqueTags }) => {
  const [filter, setFilter] = useState("all")
  return (
    <main className='container'>
      <h1 className="text-center my-4">Alyra Gradients</h1>
      <GradientsSelect
        uniqueTags={uniqueTags}
        filter={filter}
        setFilter={setFilter}
      />
      <GradientsList gradients={gradients} filter={filter} setFilter={setFilter} />
    </main>
  );
};

export default GradientsApp;