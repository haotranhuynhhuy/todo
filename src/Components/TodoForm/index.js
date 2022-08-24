import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/reducer';

const TodoForm = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const [inputValue, setInputValue]= useState('');

    const handleChange = (e)  =>{
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputValue);

        dispatch(addTodo(inputValue));
        setInputValue('')
        inputRef.current.focus();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} value={inputValue} type='text' onChange={handleChange} />
                <input type='submit' value='Add' />
            </form>
        </div>
    )
}

export default TodoForm