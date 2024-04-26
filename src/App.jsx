import { useState } from 'react'
import './App.css'

function App() {
 // Declare the places of state
 const [inputText, setInputText] = useState("");
 const [todoList, setTodoList] = useState(["Ready", "Set", "Go"]);

 function handleSubmit(event){
   event.preventDefault();
   //update the list of items in our todolist
   setTodoList([...todoList, inputText]);
 }

  return (
    <>
    <h1>To Do List</h1>
    <form onSubmit={handleSubmit}>    
      <label htmlFor="todoInput">Enter New Task</label>
      <input 
        type="text" 
        name="todoInput" 
        id="todoInput" 
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button>Add To Do</button>
    </form>
    <ul>
      {todoList.map((element, index) => {
        return <li key={index}>{element}</li>
      })}

    </ul>

    </>
  )
}

export default App
