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
      rangeFilter: [0, 300]
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.filters = this.filters.bind(this)
  }

  componentDidMount() {
    const arr = []
    Object.keys(allCourses).map(key => arr.push(allCourses[key]))

    this.setState({
      courses: arr
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
      value = e
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
        <FilterSection onChange={this.changeHandler} />
        <CourseSection courses={this.filters()} />
      </div>
    )
  }
}

export default CourseDisplayer
