import GradientsList from './GradientsList';
import GradientsSelect from './GradientsSelect';

const GradientsApp = ({ gradients, uniqueTags, filterGradients }) => {

  return (
    <main className='container'>
      <GradientsSelect
        uniqueTags={uniqueTags}
        filterGradients={filterGradients}
      />
      <GradientsList gradients={gradients} filterGradients={filterGradients} />
    </main>
  );
};

export default GradientsApp;