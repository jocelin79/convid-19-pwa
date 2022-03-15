import React, { useState } from 'react'
import './App.css'
// import tmdb from './tmdb'
import Todolist from './components/Todolist'

export default () => {

  const [todolist, setTodolist] = useState(false)

  return (
    <div className="App">
      <div className="header">
        <button onClick={(e) => {todolist ? setTodolist(false) : setTodolist(true)}}>To Do List</button>
      </div>
      {todolist ? <Todolist/> : ""}
    </div>
  )
}