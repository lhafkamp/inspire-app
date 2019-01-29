import React from 'react'

import Course from './Course'

const CourseSection = ({ courses }) => (
  <div id="course-section">
    {courses.map(course => <Course courseData={course} key={course.name} />)}
  </div>
)

export default CourseSection
