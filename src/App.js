import './App.css';
import React , { useState } from 'react';
import { AddIcon, DeleteIcon, CheckIcon } from '@chakra-ui/icons'

function App() {
  const [ todos , setTodos ] = useState([]);
  const [inputText , setInputText] = useState('');

  const AddTodo = (e) => {
    e.preventDefault();
    if(inputText){
      setTodos(prev => [...prev , {text: inputText , completed: false}]);
      setInputText('');
    }
  }

  const deleteTodo = (todo) => {
    setTodos(prev => prev.filter(prevTodo => prevTodo.text !== todo))
  }

  const AddOrRemoveComplete = (todo) => {
    setTodos(prev => prev.map(prevTodo => prevTodo.text === todo ? {...prevTodo, text: todo, completed: !prevTodo.completed } : prevTodo ));
  }


  return (
    <div className="App">
      <div className="todo-container">
      <h1 className='heading'>Todo List</h1>
        <form onSubmit={AddTodo}>
          <input className='input-box' type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}  />
          <button className='submit-btn' type="submit"><AddIcon /></button>
        </form>
        <div className="todos">
          {todos.length > 0 ? todos.map(({text,completed} , index) => (
            <div className="todo" key={index}>
              <div className={completed ? 'completed-todo-text' : 'todo-text'}>{text}</div>
              <div className="icons">
              <span className="check-icon" onClick={() => AddOrRemoveComplete(text)}><CheckIcon /></span>
              <span className="delete-icon" onClick={() => deleteTodo(text)}><DeleteIcon /></span>
              </div>
            </div>
          )) : <h2>Your Todos Will Come Here</h2>}
        </div>
      </div>
    </div>
  );
}

export default App;
