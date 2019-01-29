import React from 'react'
import allCourses from '../allCourses'

import Course from './Course'

export class CourseSection extends React.Component {
  constructor() {
    super()
    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    const arr = []
    Object.keys(allCourses).map(key => arr.push(allCourses[key]))

    this.setState({
      courses: arr
    })
  }

  render() {
    const { courses } = this.state

    return (
      <div id="course-section">
        {courses.map(course => <Course courseData={course} key={course.name} />)}
      </div>
    )
  }
}


export default CourseSection
