import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { markCompleted, todoSelector } from '../../store/reducer'
import TodoForm from '../TodoForm'

const Todos = () => {
   const todo = useSelector(todoSelector);
   const dispatch = useDispatch();
    const handleChangeChecked = (todoId) =>{
       dispatch(markCompleted(todoId))
    }
    return (
        <div className='todo-list'>
            <TodoForm />
            <ul>
                {
                    todo.map(item => {
                        return (
                            <li className={item.completed? 'completed': ''}
                            key={item.id}>{item.title}
                            <input 
                            type={'checkbox'} 
                            checked={item.completed}
                            onChange={()=>handleChangeChecked(item.id)} />
                            </li>
                            )
                    })
                }
            </ul>

        </div>
    )
}

export default Todos