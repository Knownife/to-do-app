
import {useState} from "react";
import './index.css'

function ToDoList(){

    const [tasks, setTasks] = useState(['create react project','do homework','wash the dishes']);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e){
        setNewTask(e.target.value)
    }

    function addTask(){
        if(newTask.trim()!=''){
            setTasks(prevTasks =>[...prevTasks,newTask])
            setNewTask("")
        }
    }

    function deleteTask(index){
        let updetedTasks = tasks.filter((element,i)=>i!==index);
        setTasks(updetedTasks)
    }

    function moveTaskUp(index){
        if(index>0){
            const updetedTasks = [...tasks];
            [updetedTasks[index],updetedTasks[index-1]]=[updetedTasks[index-1],updetedTasks[index]]
            setTasks(updetedTasks)
        }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updetedTasks = [...tasks];
            [updetedTasks[index],updetedTasks[index+1]]=[updetedTasks[index+1],updetedTasks[index]]
            setTasks(updetedTasks)
        }
    }



    return <div className='to-do-list'>
        <h1>To-Do-List</h1>

        <div>
            <input type={"text"} placeholder={'Enter task'} value={newTask} onChange={handleInputChange}/>
            <button onClick={addTask}>Add task</button>
        </div>

        <ol>
            {tasks.map((task, index) =>
                <li>
                    <span className='text' key={index}>{task}</span>
                    <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                    <button className='move-up-button' onClick={() => moveTaskUp(index)}>Move up</button>
                    <button className='move-down-button' onClick={() => moveTaskDown(index)}>Move down</button>
                </li>
            )

            }
        </ol>
    </div>
}

export default ToDoList;