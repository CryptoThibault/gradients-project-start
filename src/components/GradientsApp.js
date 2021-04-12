import GradientsList from './GradientsList';
import GradientsSelect from './GradientsSelect';

const GradientsApp = (props) => {
  const { gradients, uniqueTags, filterGradients } = props;

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