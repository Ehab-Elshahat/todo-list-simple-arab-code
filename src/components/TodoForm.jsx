import {React, useState} from 'react'

import shortid from 'shortid';

const TodoForm = (props) => {

  const [text, setText] = useState('');

 const handleSubmit= (e)=> {
e.preventDefault();
props.onSubmit({
  id: shortid.generate(),
  text: text,
  complete: false
})
setText(" ")
 }


  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <button
        className="border rounded px-2 hover:bg-black h-9 m-2 w-40"
        type="submit"
        onClick={handleSubmit}
      >
        Add Todo
      </button>
      <input
        className="bg-transparent border rounded shadow-lg m-2 px-2 py-1 w-100 "
        type="text"
        placeholder='Add Todo'
        onChange={(e)=> setText(e.target.value)}
        value={text}
      />
   
    </form>
  );
}

export default TodoForm
