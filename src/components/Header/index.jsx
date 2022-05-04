import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    addTodo
} from '../../store/reducer/todoSlice';

function Header() {
    const dispatch = useDispatch()
    const [title,setTitle] = useState('')
    const handleOnKeyUpAddTodo = (e) => {
        if(e.keyCode === 13){
            if(title.trim()){
                dispatch(addTodo(title))
                setTitle('')
            }
        }else if(e.keyCode === 27){
            setTitle('')
        }
    }
    const handleOnBlurAddTodo = () => {
        if(title.trim()){
            dispatch(addTodo(title))
            setTitle('')
        }
    }
    return (
        <header className="header">
            <h1>todos</h1>
            <input
                className="new-todo"
                placeholder="What needs to be done?" 
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyUp={handleOnKeyUpAddTodo}
                onBlur={handleOnBlurAddTodo} 
            />
      </header>
    );
}

export default Header;