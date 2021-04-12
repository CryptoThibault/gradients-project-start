import React from 'react';

const GradientTag = ({ filterGradients, tags }) => {
  return (
    <div className="mt-3" >
      {tags.map(elem =>
        <button onClick={() => filterGradients(elem)} key={elem} className='btn btn-sm me-2 mb-2 text-light bg-dark'>{elem}</button>
      )}
    </div>
  )
}
export default GradientTag;