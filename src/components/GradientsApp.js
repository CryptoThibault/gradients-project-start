import { useState } from 'react';
import GradientsList from './GradientsList';
import GradientsSelect from './GradientsSelect';

const GradientsApp = ({ gradients, uniqueTags }) => {
  const [filter, setFilter] = useState("all")
  return (
    <main className='container'>
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