import React from 'react'

import { useSelector } from 'react-redux'
import { todoSelector } from '../../store/reducer'



const Navbar = () => {
   const todo = useSelector(todoSelector)

  return (
    <div className='navbar'>
        <h1>My Redux Toolkit Todo</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Total Todos: {todo.length}</li>
        </ul>
    </div>
  )
}

export default Navbar