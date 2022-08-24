import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        allToDos: [
            { id: 1, title: 'Job 1', completed: false },
            { id: 2, title: 'Job 2', completed: false },
            { id: 3, title: 'Job 3', completed: false },
        ],
        todoInput: '',
        isEdited: false,
        todoId:  null
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
        markCompleted: (state, action) => {
            const todoId = action.payload;
            state.allToDos = state.allToDos.map(items => {
                if (items.id === todoId) {
                    items.completed = !items.completed;
                }
                return items;
            })
        },
        todoInputValue: (state, action)=>{
            state.todoInput = action.payload
        },
        deleteTodo: (state, action) => {
            const uid = action.payload;
            state.allToDos = state.allToDos.filter(items => items.id !== uid)
        },
        selectedTodo: (state, action) => {
            state.todoInput = action.payload.title;
            state.todoId = action.payload.id
        },
        stateEdit: (state) => {
            state.isEdited = !state.isEdited;
        },
        updateTodo: (state, action)=>{
            const id = action.payload.id; 
            const indexTodo = state.allToDos.findIndex(item=>item.id === id);
            state.allToDos[indexTodo].title = action.payload.title;
        },
        deleteChecked: (state) =>{
            state.allToDos = state.allToDos.filter(item => item.completed === false)
        }
    }
})

//Reducer
const todosReducer = todoSlice.reducer

//Action
export const { addTodo, markCompleted, deleteTodo, selectedTodo, stateEdit,todoInputValue, updateTodo, deleteChecked } = todoSlice.actions;
//Selector
export const todoSelector = state => state.todosReducer.allToDos;
export default todosReducer;