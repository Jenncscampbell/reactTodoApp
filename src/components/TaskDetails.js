import React, {useContext} from 'react'
import { GlobalContext } from './GlobalStore'
import { RiDeleteBin6Line } from 'react-icons/ri'; 
import { GoThumbsup } from 'react-icons/go';

const TaskDetails = ({tran}) => {

    const {updateTask, deleteTask} = useContext(GlobalContext)
    return (

        <div>
            <li className={tran.done? 'done': 'notdone'}>
                {tran.title}
                <button className='delete-btn' onClick = { ()=> deleteTask(tran.id) }> <RiDeleteBin6Line/> </button>
                <button className='done-btn'onClick= {()=> updateTask(tran.id)}><GoThumbsup/></button>

            </li>
        </div>
    )
}

export default TaskDetails
