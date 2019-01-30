import React from 'react'

const Course = ({ courseData }) => {
  const { name, description, category, price } = courseData

  return (
    <div className="course">
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="tag">{category}</span>
      <span className="price-tag">{price}</span>
    </div>
  )
}

export default Course
