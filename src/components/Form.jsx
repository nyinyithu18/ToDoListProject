import React, { useState } from 'react'

const Form = ({submitted}) => {

const [usertasks, setuserTask] = useState('')

const submittedHandly = () => {
  if(usertasks.length == 0){
    alert("Please enter a character or a word")
  }else {
    submitted(usertasks)
    setuserTask('')
  }
}

  return (
    <div className='formControl row'>
    
      <h1 className='text-center'>Todo List Project</h1>
      <div className='col-7 w-50'>
        <input value={usertasks} onChange={(e) => setuserTask(e.target.value)} type='text' placeholder='Enter Task.....' />
      </div>
      <div className='col-5'>
        <button onClick={() => submittedHandly()} className='btn btn-primary'><i className="fa-solid fa-plus pe-2"></i>Add Task</button>
      </div>
      
    </div>
  )
}

export default Form