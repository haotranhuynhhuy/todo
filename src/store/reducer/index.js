import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        allToDos: [
            { id: 1, title: 'Job 1', completed: false },
            { id: 2, title: 'Job 2', completed: false },
            { id: 3, title: 'Job 3', completed: false },
        ]
    },
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.allToDos.push(action.payload)
             },
            prepare: (title) => {
                return {
                    payload: {
                        id: nanoid(),
                        title: title,
                        completed: false
                    }
                }
            }
        },
        markCompleted: (state, action) =>{
            const todoId = action.payload;
            state.allToDos = state.allToDos.map(items => {
                if (items.id === todoId) {
                    items.completed = !items.completed;
                }
                return items;
            })
        }
    }
})

//Reducer
const todosReducer = todoSlice.reducer

//Action
export const { addTodo, markCompleted } = todoSlice.actions;
//Selector
export const todoSelector = state => state.todosReducer.allToDos
export default todosReducer;