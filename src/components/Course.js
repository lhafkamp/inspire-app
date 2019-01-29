import React from 'react'

const Course = ({ courseData }) => {
  const { name, description, category, price } = courseData

  return (
    <div className="course">
      <p>{name}</p>
      <p>{description}</p>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  )
}

export default Course
