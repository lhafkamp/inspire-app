import React from 'react'

const FilterSection = ({ onChange }) => (
  <div id="filter-section">
    <input type="text" onChange={onChange} />
  </div>
)

export default FilterSection
