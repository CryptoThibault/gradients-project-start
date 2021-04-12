import Gradient from './Gradient';

const GradientsList = ({ gradients, filterGradients }) => {
  return (
    <ul className='row list-unstyled'>
      {gradients.map((gradient) => {
        return (
          <li className='col-lg-3 col-md-4 col-sm-6' key={gradient.name}>
            <Gradient
              filterGradients={filterGradients}
              colorStart={gradient.start}
              colorEnd={gradient.end}
              name={gradient.name}
              tags={gradient.tags}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default GradientsList;
