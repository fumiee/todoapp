import { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState([]);
  return (
    <div>
      <h1>Test</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos([...todos, text]);
        }}
      >
        add
      </button>
      <div>
        <h2>todo list</h2>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button
                  onClick={() => {
                    setTodos(todos.filter((v) => v !== todo));
                  }}
                >
                  remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
