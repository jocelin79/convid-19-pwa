import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Main_routes from './components/Main_routes'
import './App.css'

export default () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todolist">Todolist</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <Main_routes/>  
    </Router>
  )
}
