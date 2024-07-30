import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const handleToDos = ()=> {
    const newToDo = {
      id: Date.now(), // Generates a unique ID based on the current timestamp
      text: toDo,
      status: false
    };
    setToDos([...toDos, newToDo]);
    setToDo('');
  }
  const handleDeleteItem =(id) =>{
    const newItems = [...toDos.filter(item=> item.id !== id.id)];
    setToDos(newItems);
  }

  const handleTodoStatus =(e) =>{
    const status = e.target.value;
    const id = e.target.id;
    console.log('Id', id);
    setToDos((toDos) =>
      toDos.map((item) =>
        // item.id === id ? { ...item, status: !item.status } : item
        console.log('Item', item)
      )
    );
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=> setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={handleToDos} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>Rect tutorial</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
        <List toDos={toDos} handleDeleteItem={handleDeleteItem} handleTodoStatus={handleTodoStatus}/>
      </div>
    </div>
  );
};

const List =({toDos, handleDeleteItem, handleTodoStatus})=> {
  return(
    toDos.map((toDoItem)=>(
      <div className="todo" key={toDoItem.id}>
      <div className="left">
        <input type="checkbox" name="" id={toDoItem.id} value={toDoItem.status} onChange={(e)=>handleTodoStatus(e)}/>
        <p>{toDoItem.text}</p>
      </div>
      <div className="right">
        <i className="fas fa-times" onClick={()=>handleDeleteItem(toDoItem)}></i>
      </div>
    </div>
    ))
  )
};

export default App;
