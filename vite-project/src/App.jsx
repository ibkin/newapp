/*import { useState } from 'react';
import ToDoItem from './components/ToDoItem';
import ToDoContainer from './components/ToDoContainer';

function App() {
  const [todos, setTodos] = useState([]);
  
  const handelSubmit = (todoItem) => {
    setTodos([
      ...todos,todoItem
    ])
  }
  
  return (
   <div className="todo-app">
     <h2 className="todo-title">todo-list</h2>
     <ToDoItem onSubmit={handelSubmit}/>
   </div>
  )
}

export default App;
*/







import ToDoItem from './components/ToDoItem';
import ToDoContainer from "./components/ToDoContainer";
import ToDoFilter from './components/ToDoFiter';
import {useState} from 'react';
import { STATUS } from './config/status';

function App() {

  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState(`${STATUS.IS_CREATE}, ${STATUS.IS_DONE}`);

  const handelSubmit = (todoItem) => {
    setTodos([
      ...todos,todoItem
    ])
    console.log(todos)
  }

  const handelOperate = (todoItem) => {
    console.log(todoItem);

    const newTodos = todos.filter(todo => todo.id !== todoItem.id
      )
      newTodos.push(todoItem)
      setTodos(newTodos)
  }

  const handleStatusChange = ( status ) => {
    setFilterStatus(status);
    console.log(status);
  }

  return (
    <div className="todo-app">
      <h2 className="todo-title">予定管理アプリ</h2>
     <ToDoItem onSubmit={handelSubmit}/>
     <ToDoFilter filterStatus={filterStatus} onFilterStatus={handleStatusChange} />
     <ToDoContainer filterStatus={filterStatus} todos={todos} onOperate={handelOperate}/>
    </div>
  )
}

export default App