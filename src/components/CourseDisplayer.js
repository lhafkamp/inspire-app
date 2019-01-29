import React from 'react'
import allCourses from '../allCourses'

import CourseSection from './CourseSection'
import FilterSection from './FilterSection'

class CourseDisplayer extends React.Component {
  constructor() {
    super()
    this.state = {
      courses: [],
      search: []
    }

    this.changeHandler = this.changeHandler.bind(this)
  }

  componentDidMount() {
    const arr = []
    Object.keys(allCourses).map(key => arr.push(allCourses[key]))

    this.setState({
      courses: arr
    })
  }

  changeHandler(e) {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    const { courses, search } = this.state

    return (
      <div>
        <FilterSection onChange={this.changeHandler} />
        <CourseSection courses={courses} />
      </div>
    )
  }
}

export default CourseDisplayer
