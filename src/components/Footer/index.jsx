import {useSelector,useDispatch} from 'react-redux'
import {
    todoSelector,
    todoTypeSelector,
    todoArrTypeSelector,
    changeType,
    clearCompleted,
} from '../../store/reducer/todoSlice'
function Footer() {
    const dispatch = useDispatch()
    const todos = useSelector(todoSelector)
    const arrType = useSelector(todoArrTypeSelector)
    const type = useSelector(todoTypeSelector)
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{todos.filter(todo => !todo.completed).length}</strong> item left</span>
            <ul className="filters">
                {arrType.map(filter => (
                    <li key={filter} onClick={() => dispatch(changeType(filter))}>
                        <a className={filter === type ? 'selected' : ''} href="#">{filter}</a>
                    </li>
                ))}
            </ul>
            {todos.filter(todo => todo.completed).length > 0 &&  
            <button
                className="clear-completed"
                onClick={() => dispatch(clearCompleted())}
            >Clear completed
            </button>}
      </footer>
    );
}

export default Footer;