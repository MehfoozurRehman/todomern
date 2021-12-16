import * as React from "react";
import axios from "axios";

export default function App() {
  const [text, setText] = React.useState("");

  const [todoarray, setTodoarray] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => {
      console.log(res.data);
      setTodoarray(res.data);
    });
  }, []);

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
          return (
            <div className="todolist__item" key={index}>
              {item._id}
              <br />
              {item.item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
