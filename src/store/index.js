import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './reducer/todoSlice'

const store = configureStore({
    reducer:{
        todos:todoReducer
    }
})
export default store