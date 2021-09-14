import React, {useState, useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import {GlobalContext} from './GlobalStore'


const TaskInput = () => {

    const [taskTitle, setTaskTitle] = useState('')

    const {createTask} = useContext( GlobalContext )

    const addTask = (e) => {
        e.preventDefault(); // don't refresh or reload

        const newTran = {
            id: uuidv4(),
            title: taskTitle,
            done: false,
        }

        createTask(newTran);

        setTaskTitle('');
        e.target.reset();

    }
    return (
        <div>
            <form onSubmit = {addTask}> 
                <label> Task </label>
                <input type = 'text' 
                    onChange = {(e) => setTaskTitle(e.target.value)}/> 
                <button type='submit' className='task-btn'> Add </button>
            
            </form>
            
        </div>
    )
}

export default TaskInput
