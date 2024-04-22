import { useState } from "react";
import "./App.css";
import deleteIcon from "./icon/delete.svg";
function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleClick = () => {
    if (value !== "") {
      setTodos([...todos, value]);
      setValue("");
    }
  };
  const filterTodos = (index) => {
    const uptadedTasks = todos.filter((_, i) => i !== index);
    setTodos(uptadedTasks);
  };
  return (
    <>
      <div className="container-input">
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onDragEnterCapture={handleClick}
          placeholder="Введите задачу..."
          className="input-text"
          type="text"
          name=""
          id=""
        />
        <button className="input-button" onClick={handleClick}>
          Добавить
        </button>
      </div>
      {todos.map((el, index) => (
        <div key={index} className="todo-element">
          <p className="todo-name">{el}</p>

          <img
            className="todo-delete"
            src={deleteIcon}
            alt=""
            onClick={() => filterTodos(index)}
          />
        </div>
      ))}
      {console.log(todos)}
    </>
  );
}

export default App;
