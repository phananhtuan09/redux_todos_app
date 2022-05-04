import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteTodo,
    todoSelector,
    todoTypeSelector,
    todoEditInxSelector,
    toggleCompleted,
    toggleCompletedAll,
    startEdit,
    endEdit,
} from '../../store/reducer/todoSlice';

function Todo() {
    const dispatch = useDispatch()
    const todos = useSelector(todoSelector)
    const editIndex = useSelector(todoEditInxSelector)
    const filters = {
        All:() => true,
        Active:(todo) => !todo.completed,
        Completed:(todo) => todo.completed
    }
    const type = useSelector(todoTypeSelector)
    const handleEndEdit = (e) => {
            if(e.keyCode === 13){
                dispatch(endEdit(e.target.value))
            }else if(e.keyCode === 27){
                dispatch(endEdit(''))
            }
        
    }
    
    return (
        <section className="main">
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                checked={todos.every(todo => todo.completed)}
                onChange={(e) => dispatch(toggleCompletedAll(e.target.checked))}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {todos.filter(filters[type]).map(todo => (
                    <li
                        key={todo.id}
                        className={editIndex === todo.id ? 'editing' : todo.completed ? 'completed' : ''}
                    >
                    <div className="view">
                        <input
                            className="toggle"
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch(toggleCompleted(todo.id))}
                        />
                        <label onDoubleClick={() => dispatch(startEdit(todo.id))}>{todo.title}</label>
                        <button
                            className="destroy"
                            onClick={() => dispatch(deleteTodo(todo.id))}
                        >
                        </button>
                    </div>
                    <input
                        className="edit"
                        defaultValue={todo.title}
                        onKeyUp={handleEndEdit}
                        onBlur={(e) => dispatch(endEdit(e.target.value))}
                    />
                </li>
                ))}
            </ul>
        </section>
    );
}

export default Todo;