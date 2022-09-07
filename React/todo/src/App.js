import React,{useState} from 'react';
import './App.css';

function App() {
  const [newTodo,setNewTodo]=useState("");
  const [todos,setTodos]=useState([]);

  const handleTodoDelete=(e)=>{
    const filteredTodos = todos.filter((todo,i)=>{
      return i !== e;
    })

    setTodos(filteredTodos);
  }

  const handleNewTodoSubmit=(e)=>{
    e.preventDefault();

    if(newTodo.length ==0){
      return;
    }

    const todoItem={
      text:newTodo,
      complete:false
    };

    setTodos([...todos,todoItem]);
    setNewTodo("");
    // console.log(newTodo)
  };

  const handleToggleComplete=(e)=>{
    const updatedTodo=todos.map((todo,i)=>{
      if (e==i) {
        todo.complete= !todo.complete;
        // const updatedTodo={ ...todo,complete: !todo.complete};
        // return updatedTodo;
      }
      return todo;
    })
    setTodos(updatedTodo);
  }
  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={(e)=>{
        handleNewTodoSubmit(e);
      }}>
        <input onChange={(e)=>{
          setNewTodo(e.target.value);
        }} type="text"
        value={newTodo}
        />
      <div>
        <button>Add</button>
      </div>
      </form>
      <hr/>
      {
        todos.map((todo,i)=>{
          const todoClasse=["bold","italic"];
          if (todo.complete) {
            todoClasse.push("line-through");
          }
          return(
            <div key={i}>
              <input onChange={(e)=>{
                handleToggleComplete(i);
              }} checked={todo.complete} type="checkbox"/>
              <span className={todoClasse.join(" ")}>{todo.text}</span>
              <button onClick={(e)=>{handleTodoDelete(i)}}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
