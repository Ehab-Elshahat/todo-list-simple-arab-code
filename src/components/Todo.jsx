import React from 'react'

const Todo = (props) => {
  return (
    <div className="d-flex justify-between px-2 mb-2 border rounded py-2 mx-2 bg-slate-800 ">
      <div
        onClick={props.toggleComplete}
        className={
          props.todo.complete
            ? "line-through cursor-pointer opacity-50"
            : "cursor-pointer"
        }
      >
        {" "}
        {props.todo.text}
      </div>
      <button
        className=" rounded-full w-8 h-8 d-flex justify-center bg-red-800 hover:bg-red-500 fs-6 fw-bold"
        onClick={props.onDelete}
      >
        x
      </button>
    </div>
  );
}

export default Todo
