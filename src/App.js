import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav_bar from './components/Nav_bar'
import Main_routes from './components/Main_routes'
import './App.css'

export default () => {
  return (
    <Router>
      <Nav_bar />
      <Main_routes />
    </Router>
  )
}
