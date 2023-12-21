import './App.css';
import List from './components/List';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { api } from './api/apiResource';
import { useEffect, useState } from 'react';
import uuid from "react-uuid"

function App() {

  const [tasks, setTasks] = useState([])

  const UsingEffect = async() =>{
    const res = await api.get("/todolist")

    setTasks(res.data)
  }

  useEffect(()=> {
    UsingEffect();
}, [tasks] )

const submitted = async(usertasks) =>{
  const respon = {
    "id": uuid(),
    "task": usertasks,
    "complete": false
};

await api.post("todolist", respon);

}

const deleteTask = async(task_id) =>{
  await api.delete(`/todolist/${task_id}`)
}

const checkTask = async(task_id, complete) =>{
  await api.patch(`/todolist/${task_id}`,{complete})
}

  return (
    <div className='container'>
    
      <List tasks={tasks} submitted={submitted} deleteTask={deleteTask} checkTask={checkTask}/>
    </div>
  );
}

export default App;
