import React from 'react'
import Slider from 'react-nouislider'
import 'react-nouislider/example/nouislider.css'

const FilterSection = ({ onChange, categories, range, rangeMax }) => (
  <div id="filter-section">
    <h3>Find your course</h3>

    <div className="search">
      <label>Search</label>
      <input type="text" onChange={onChange} placeholder="Search for courses.." />
    </div>

    <div className="categories">
      <label>Categories</label>
      <select onChange={onChange}>
        <option value="all">all categories</option>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}
      </select>
    </div>

    <div className="price-range">
      <label>Price range</label>
      <Slider 
        range={{ min: 0, max: rangeMax }} 
        start={[range[0], range[1]]}
        tooltips={true}
        connect
        onChange={onChange} 
      />
    </div>
  </div>
)

export default FilterSection
