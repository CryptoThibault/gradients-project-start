import React from 'react';

const GradientTag = ({ filter, setFilter, tags }) => {
  return (
    <div className="mt-3" >
      {tags.map(elem =>
        <button onClick={(e) => setFilter(e.target.textContent)} key={elem} className={filter === elem ? 'btn btn-sm me-2 mb-2 text-muted bg-light' : 'btn btn-sm me-2 mb-2 text-light bg-dark'} disable={filter && elem}>{elem}</button>
      )}
    </div>
  )
}
export default GradientTag;
