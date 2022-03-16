import React, { useState } from 'react'
import './Todolist.css'

export default () => {
  
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  return (
    <div className="ToDoList">
      <div className="container">
        <h1 className="title">To Do List</h1>
        <form onSubmit={(e) => {e.preventDefault(); 
          setTasks([...tasks, inputValue]);
          setInputValue('');
          e.stopPropagation()}}>
          <lable for="tasks">Task :</lable><br/>
          <input type="text" id="task" value={inputValue} onChange={(e) => {setInputValue(e.target.value); e.stopPropagation()}}/>
          <input className="submit" type="submit" value="Submit"/>
        </form>
        <ul>
          {tasks.map((task, index) => <li className="tasks_li" key="key" onClick={() => {setTasks(tasks.filter((t, taskIndex) => taskIndex !== index))}}>{task}</li>)}
        </ul>
      </div>
    </div>
  )
}