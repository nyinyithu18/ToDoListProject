import React from 'react'
import Form from './Form'
import './List.css'
import Cark from './Cark'

const List = ({tasks, submitted, deleteTask, checkTask}) => {
  return (
    <div>

      <Form submitted={submitted}/>

      <Cark tasks={tasks} deleteTask={deleteTask} checkTask={checkTask}/>
      
    </div>
  )
}

export default List