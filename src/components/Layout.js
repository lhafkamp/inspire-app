import React from 'react'

import Nav from './Nav'
import Footer from './Footer'
import CourseDisplayer from './CourseDisplayer'

import '../styles/all.scss'

const Layout = () => (
  <React.Fragment>
    <Nav />
    <div id="layout">
      <CourseDisplayer />
      <Footer />
    </div>
  </React.Fragment>
)

export default Layout
