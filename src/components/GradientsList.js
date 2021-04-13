import Gradient from './Gradient';

const GradientsList = ({ gradients, filter, setFilter }) => {
  const filteredGradients = filter === "all" ? gradients : gradients.filter((gradient) => gradient.tags.includes(filter))
  return (
    <ul className='row list-unstyled'>
      {filteredGradients.map((gradient) => {
        return (
          <li className='col-lg-3 col-md-4 col-sm-6' key={gradient.name}>
            <Gradient
              filter={filter}
              setFilter={setFilter}
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
