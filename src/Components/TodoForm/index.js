import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, todoInputValue, updateTodo, stateEdit, deleteChecked } from '../../store/reducer';

const TodoForm = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const edit = useSelector(state => state.todosReducer.isEdited);
    const todoInput = useSelector(state => state.todosReducer.todoInput);
    const todoId = useSelector(state => state.todosReducer.todoId);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(inputValue));

        setInputValue('')
        inputRef.current.focus();
    }

    const handleUpdate = (e)=>{
        e.preventDefault();
        dispatch(updateTodo({id: todoId, title: todoInput}))
        dispatch(stateEdit());
    }
    const handleDeleteChecked = () =>{
        dispatch(deleteChecked())
    }
    return (
        <div>
            <form onSubmit={edit? handleUpdate : handleSubmit }>
                {
                    edit ?
                        <input value={todoInput} type='text' onChange={(e) => dispatch(todoInputValue(e.target.value))} />
                        :
                        <input ref={inputRef} value={inputValue} type='text' onChange={handleChange} />

                }
            </form>
            <input type='submit' value={edit? 'Update':'Add'}/>
            <button className='delete-btn' onClick={handleDeleteChecked}>Delete checked</button>
        </div>
    )
}

export default TodoForm