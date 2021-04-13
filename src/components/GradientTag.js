import React from 'react';


const GradientTag = ({ filter, setFilter, tags }) => {
  const handleButtonClick = (elem) => {
    setFilter(elem.target.textContent)

  }
  return (
    <div className="mt-3"  >
      {tags.map(elem =>
        <button onClick={(e) => handleButtonClick(e)} key={elem} className={filter === elem ? 'btn btn-sm me-2 mb-2 text-muted bg-light' : 'btn btn-sm me-2 mb-2 text-light bg-dark'} disable={filter === tags}>{elem}</button>
      )}
    </div>
  )
}
export default GradientTag;
