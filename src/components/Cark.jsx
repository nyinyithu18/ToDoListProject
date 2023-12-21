import React from 'react'

const Cark = ({tasks , deleteTask, checkTask}) => {

  const handleDeleteTask = (id) => {
    if(window.confirm("Are you sure ?")) { 
      deleteTask(id)
    }
  }


  return (
    <div>
        {
            tasks.map((task) => (
                <div key={task.id} className={task.complete ? 'row border mb-3 mt-4 shadow-sm bg-success text-white text-decoration-line-through' : 'row border mb-3 mt-4 shadow-sm'}>
                    <span className='col-7 offset-1'><input onClick={()=> checkTask(task.id, !task.complete)} className='me-3' type="checkbox" defaultChecked={task.complete}/>{task.task}</span>
                    <div className='col-4'>
                      <button className='bg-danger'><i onClick={()=> handleDeleteTask(task.id)} className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cark