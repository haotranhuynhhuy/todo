import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, markCompleted, selectedTodo, stateEdit, todoSelector } from '../../store/reducer'
import TodoForm from '../TodoForm'

const Todos = () => {
   const todo = useSelector(todoSelector);
   const edit = useSelector(state => state.todosReducer.isEdited);
   const dispatch = useDispatch();
    const handleChangeChecked = (todoId) =>{
       dispatch(markCompleted(todoId))
    }
    const handleDelete = id =>{
        dispatch(deleteTodo(id))
    }
    const handleSelected = (id, title) =>{
        dispatch(selectedTodo({id, title}));
        dispatch(stateEdit());
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

                            <button onClick={()=> handleSelected(item.id, item.title)} disabled={edit} >Edit</button>
                            <button onClick={()=> handleDelete(item.id)}>Delete</button>
                            </li>
                            )
                    })
                }
            </ul>

        </div>
    )
}

export default Todos