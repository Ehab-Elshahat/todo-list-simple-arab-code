/** @format */
import { React, useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  let [todos, setTodos] = useState([]);
  const [todoToShow, setTodoToShow] = useState("all");
const [toggleAllComplete, setToggleAllComplete] = useState(true)


  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  const handelDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  const updateTodoShow =(s)=>{
    setTodoToShow(s);
  }

const removeAllCompleted= () =>{
  setTodos(todos.filter((todo) => !todo.complete))
}

const toggleAll =() => {
  setTodos(
    todos.map((todo) => (
      {
        ...todo,
        complete: toggleAllComplete
      }
    )
  )
  )
  setToggleAllComplete(!toggleAllComplete)
}

  const toggleComplete =(id)=>{
setTodos(
  todos.map((todo) => {
    if(todo.id === id) {
      return {
        ...todo,
        complete : !todo.complete
      }
    } else {
      return todo;
    }
  })
)
  }

  if (todoToShow === "active") {
    todos = todos.filter((todo) => !todo.complete);
  } else if (todoToShow === "completed") {
    todos = todos.filter((todo) => todo.complete);
  }
    return (
      <div className="App">
        <TodoForm onSubmit={addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={() => {
              handelDelete(todo.id);
            }}
            toggleComplete={() => {
              toggleComplete(todo.id);
            }}
          />
        ))}
        <div className="d-flex justify-between m-2 border p-2 rounded">
          <button
            className="border px-3  rounded hover:bg-green-800"
            onClick={() => {
              updateTodoShow("all");
            }}
          >
            All
          </button>
          <button
            className="border px-3  rounded hover:bg-green-800"
            onClick={() => {
              updateTodoShow("active");
            }}
          >
            Active
          </button>
          <button
            className="border px-3  rounded hover:bg-green-800"
            onClick={() => {
              updateTodoShow("completed");
            }}
          >
            Completed
          </button>
        </div>
        <div className="d-flex justify-between m-2 border p-2 rounded">
          {todos.some((todo) => todo.complete) ? 
        (<button
            className="border px-3  rounded hover:bg-green-800"
            onClick={removeAllCompleted}
          >
            Remove Completed
          </button>)  : ""
        }
          <button className="border px-3  rounded hover:bg-green-800"
          onClick={toggleAll}
          >
            Toggle All To : {toggleAllComplete ? "True" : "False"}
          </button>
        </div>
      </div>
    );
}

export default App;
