import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const [todoarray, setTodoarray] = useState([
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, atque? Deleniti aliquid facere necessitatibus voluptas natus rerum autem soluta tempore?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, atque? Deleniti aliquid facere necessitatibus voluptas natus rerum autem soluta tempore?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, atque? Deleniti aliquid facere necessitatibus voluptas natus rerum autem soluta tempore?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, atque? Deleniti aliquid facere necessitatibus voluptas natus rerum autem soluta tempore?",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, atque? Deleniti aliquid facere necessitatibus voluptas natus rerum autem soluta tempore?",
  ]);
  return (
    <div className="app">
      <form action="">
        <input
          type="text"
          placeholder="add to do"
          defaultValue={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setTodoarray([...todoarray, text]);
          }}
        >
          save
        </button>
      </form>
      <div className="todolist">
        {todoarray.map((item, index) => {
          return <div className="todolist__item">{item}</div>;
        })}
      </div>
    </div>
  );
}
