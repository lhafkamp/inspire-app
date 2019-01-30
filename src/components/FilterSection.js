import React from 'react'
import Slider from 'nouislider-react'
import 'nouislider/distribute/nouislider.css'

const FilterSection = ({ onChange }) => (
  <div id="filter-section">
    <input type="text" onChange={onChange} />
    <select onChange={onChange}>
      <option value="all">all categories</option>
      <option value="calculus">calculus</option>
      <option value="language">language</option>
      <option value="history">history</option>
    </select>
    <Slider 
      range={{ min: 0, max: 300 }} 
      start={[0, 300]}
      tooltips={true}
      connect
      onChange={onChange} 
    />
  </div>
)

export default FilterSection
