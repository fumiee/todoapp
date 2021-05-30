import { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  return (
    <div className="w-2/3 flex flex-col mx-auto">
      <div className="self-center w-full">
        <h1 className="py-6 font-serif text-2xl text-center">TodoApp</h1>
        <div className="flex flex-col">
          <input
            className="rounded border-black border-2 w-full"
            type="text"
            name="todo"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            className="bg-red-300 py-2 mt-2 mb-6"
            onClick={() => {
              setTodos([...todos, text]);
              setText("");
            }}
          >
            Add Todo
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-2xl border-b-2 border-gray-300 mb-5">Todo List</h1>
        <ul>
          {todos.map((todo) => {
            return (
              <li
                key={todo}
                className="flex flex-row justify-between rounded-lg border-gray-300 border-2 py-3 px-4 items-center mb-3"
              >
                <p>{todo}</p>
                <button
                  className="bg-red-300 py-1 px-2 rounded-lg"
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
