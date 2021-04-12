import GradientTitle from './GradientTitle';
import GradientCode from './GradientCode';
import GradientPill from './GradientPill';
import GradientTag from './GradientTag';

const Gradient = ({ colorStart, colorEnd, name, tags, filterGradients }) => {
  return (
    <div className='card p-3 mb-4 shadow'>
      <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
      <GradientTitle>{name}</GradientTitle>
      <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
      <GradientTag tags={tags} filterGradients={filterGradients} />
    </div>
  );
};

export default Gradient;
