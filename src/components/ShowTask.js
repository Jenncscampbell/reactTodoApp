import React, {useState, useContext} from 'react'
import TaskInput from './TaskInput'
import ListTask from './ListTask'
import { GlobalContext } from './GlobalStore'

const ShowTask = () => {


    return (
        <>       
            <div className='task-layout'> 
                <div className='task-input'>
                    <TaskInput />
                </div>
                <div className='task-list'> 
                    <ListTask /> 
                </div>
            </div>
        </>
    )
}

export default ShowTask
