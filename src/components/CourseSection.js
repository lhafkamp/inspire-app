import React from 'react'

import Course from './Course'

const CourseSection = ({ courses }) => (
  <div id="course-section">
    {courses.length ? courses
      .map(course => <Course courseData={course} key={course.name} />) : <h1>No results found</h1>}
  </div>
)

export default CourseSection
