import React from 'react';

const GradientsSelect = ({ uniqueTags, filterGradients }) => {
  return (
    <form>
      <div class="input-group mb-3" >
        <span className="input-group-text" id="select">Filtrer par tag</span>
        <select
          name='tags'
          id='tags'
          className='form-select form-select mb-0.5'
          onChange={(e) => filterGradients(e.target.value)}
        >
          <option value="all" key="all">Tous</option>
          {uniqueTags.map((tag) => {
            return (
              <option value={tag} key={tag}>
                {tag}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};
export default GradientsSelect;