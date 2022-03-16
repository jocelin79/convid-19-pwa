import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Todolist from './Todolist'
import Contato from './Contato'

export default () => {
  return(
  <Routes>
    <Route path="/" element={<Home />}>
    </Route>
    <Route path="/todolist" element={<Todolist />}>
    </Route>
    <Route path="/contato" element={<Contato />}>
    </Route>
    <Route path="*" element={<h1>Not found</h1>}></Route>
  </Routes>
  )
}