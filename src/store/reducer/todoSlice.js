import {createSlice,createAsyncThunk,nanoid} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name:'todos',
    initialState:{
        todos:[
            {
                id:1,
                title:'Learn JavaScript',
                completed:false,
            },
            {
                id:2,
                title:'Learn HTML CSS',
                completed:true,
            },
        ],
        editIndex:null,
        type:'All',
        arrType:['All','Completed','Active'],
    },
    reducers:{
        addTodo:{
            reducer(state,action){
                state.todos.push(action.payload)
            },
            prepare(title){
                return {
                    payload:{
                        id:nanoid(),
                        title,
                        completed:false
                    }
                }
            }
        },
        toggleCompleted(state,action){
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload){
                    todo.completed = !todo.completed
                }
                return todo
            })
        },
        toggleCompletedAll(state,action){
            state.todos = state.todos.map(todo => {
                todo.completed = action.payload
                return todo
            })
        },
        deleteTodo(state,action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        startEdit(state,action){
            state.editIndex = action.payload
        },
        endEdit(state,action){
            state.todos = state.todos.map(todo => {
                if(todo.id === state.editIndex && action.payload.trim()){
                    todo.title = action.payload
                }
                return todo
            })
            state.editIndex = null
        },
        changeType(state,action){
            state.type = action.payload
        },
        clearCompleted(state,action){
            state.todos = state.todos.filter(todo => !todo.completed)
        }
    },
})
const todoReducer = todoSlice.reducer
export default todoReducer
export const 
    {   addTodo,
        toggleCompleted,
        toggleCompletedAll,
        deleteTodo,
        startEdit,
        endEdit,
        changeType,
        clearCompleted,
    } 
= todoSlice.actions
export const todoSelector = state => state.todos.todos
export const todoEditInxSelector = state => state.todos.editIndex
export const todoTypeSelector = state => state.todos.type
export const todoArrTypeSelector = state => state.todos.arrType
