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
      categoryFilter: []
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

    switch(e.target.type) {
      case 'select-one':
        state = "categoryFilter"
        break
      default:
        state = "searchFilter"
    }

    this.setState({
      [state]: e.target.value
    })
  }

  filters() {
    const { courses, searchFilter, categoryFilter } = this.state

    const filteredByCategory = courses
      .filter(course => categoryFilter !== 'all' ? course.category.includes(categoryFilter) : course.category)

    const filteredBySearch = courses
      .filter(course => course.name.includes(searchFilter) || course.description.includes(searchFilter))

    const allFilters = filteredByCategory
      .filter(course => filteredBySearch.includes(course))

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
