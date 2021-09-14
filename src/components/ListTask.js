import React, {useContext} from 'react'
import { GlobalContext } from './GlobalStore'
import TaskDetails from './TaskDetails'
import { reactLocalStorage } from 'reactjs-localstorage'

const ListTask = () => {

    const {trans} = useContext(GlobalContext)
    reactLocalStorage.setObject('REACTJSTODO', trans );

    const total = trans.length; 

    const totalDone = trans.reduce( ( cnt, { done } ) => done ? cnt +1 : cnt , 0 )

    return (
        <div>
            <h1>Tasks List ( total: {total} done: { totalDone } )</h1>

            <ul className='list'>
            { 
              trans.map( tran => 
                
                    <TaskDetails key={tran.id}  tran={tran} />
                )
            }

            </ul>
        </div>
    )
    
}

export default ListTask
