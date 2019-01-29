import React from 'react'

import Nav from './Nav'
import Footer from './Footer'
import CourseSection from './CourseSection'
import FilterSection from './FilterSection'

import '../styles/all.scss'

const Layout = () => (
  <React.Fragment>
    <Nav />
    <div id="layout">
      <div>
        <FilterSection />
        <CourseSection />
      </div>
      <Footer />
    </div>
  </React.Fragment>
)

export default Layout
