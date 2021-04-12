import React from 'react';

const GradientsSelect = (props) => {
  const { uniqueTags, filterGradients } = props;

  return (
    <form>
      <select
        name='tags'
        id='tags'
        multiple
        size='5'
        className='form-select form-select-lg mb-4'
        aria-label='filter by tags'
        onChange={(e) => filterGradients(e.target.value)}
      >
        {uniqueTags.map((tag) => {
          return (
            <option value={tag} key={tag}>
              {tag}
            </option>
          );
        })}
      </select>
    </form>
  );
};
export default GradientsSelect;