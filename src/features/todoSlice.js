import {createSlice,nanoid} from '@reduxjs/toolkit'
const items=localStorage.getItem('todos')!=null ? JSON.parse(localStorage.getItem('todos')):[]
const initialState={
    todos:items,
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
            localStorage.setItem('todos',JSON.stringify(state.todos.map(todos=>todos)))
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
            localStorage.setItem('todos',JSON.stringify(state.todos.map(todos=>todos)))
        }
    }

})
export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer