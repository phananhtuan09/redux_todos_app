import React from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Todo from './components/Todo';
import './css/base.css'
import './css/style.css'
import {useSelector} from 'react-redux'
import {todoSelector} from './store/reducer/todoSlice'
function App() {
  const todos = useSelector(todoSelector)
  return (
    <section className="todoapp">
        <Header/>
        {todos.length > 0 && <Todo/>}
        {todos.length > 0 && <Footer/>}
    </section>
  );
}

export default App;
