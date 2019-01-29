import React from 'react'

const FilterSection = ({ onChange }) => (
  <div id="filter-section">
    <input type="text" onChange={onChange} />
    <select onChange={onChange}>
      <option value="all">all categories</option>
      <option value="calculus">calculus</option>
      <option value="language">language</option>
      <option value="history">history</option>
    </select>
  </div>
)

export default FilterSection
