import React from 'react'
import allCourses from '../allCourses'

import CourseSection from './CourseSection'
import FilterSection from './FilterSection'

class CourseDisplayer extends React.Component {
  constructor() {
    super()
    this.state = {
      courses: [],
      searchFilter: [],
      categoryFilter: [],
      categories: [],
      rangeFilter: [0, 1000],
      rangeMax: 1000,
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.filters = this.filters.bind(this)
  }

  componentDidMount() {
    const courseArr = []
    const categoryArr = []

    Object.keys(allCourses).map(key => courseArr.push(allCourses[key]))

    const priceArr = courseArr.map(course => course.price)
    const maxPrice = Math.max(...priceArr)

    courseArr.map(course => !categoryArr.includes(course.category) ? categoryArr.push(course.category) : null)

    this.setState({
      courses: courseArr,
      categories: categoryArr,
      rangeFilter: [0, maxPrice],
      rangeMax: maxPrice,
    })
  }

  changeHandler(e) {
    let state = null
    let value = null

    if (e.target) {
      switch(e.target.type) {
        case 'select-one':
          state = 'categoryFilter'
          value = e.target.value
          break
        default:
          state = 'searchFilter'
          value = e.target.value
      }
    } else {
      state = 'rangeFilter'
      value = e.map(e => parseFloat(e))
    }

    this.setState({
      [state]: value
    })
  }

  filters() {
    const { courses, searchFilter, categoryFilter, rangeFilter } = this.state

    const filteredByCategory = courses
      .filter(course => categoryFilter !== 'all' ? course.category.includes(categoryFilter) : course.category)

    const filteredBySearch = courses
      .filter(course => course.name.includes(searchFilter) || course.description.includes(searchFilter))

    const filteredByRange = courses
      .filter(course => course.price >= rangeFilter[0] && course.price <= rangeFilter[1] ? course.price : null)

    const allFilters = filteredByCategory
      .filter(course => filteredBySearch.includes(course))
      .filter(course => filteredByRange.includes(course))

    return allFilters
  }

  render() {
    return (
      <div>
        <FilterSection 
          onChange={this.changeHandler}
          categories={this.state.categories}
          range={this.state.rangeFilter}
          rangeMax={this.state.rangeMax}
        />
        <CourseSection courses={this.filters()} />
      </div>
    )
  }
}

export default CourseDisplayer
