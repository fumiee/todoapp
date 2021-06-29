import { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="font-mono bg-red-100 min-h-screen">
      <h1 className="flex justify-center text-3xl">todoapp</h1>
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
          setText("");
        }}
      >
        ぼたん
      </button>
      <div className="flex flex-col gap-5">
        {todos.map((todo, index) => {
          return (
            <List key={index} setTodos={setTodos} todos={todos} todo={todo} />
          );
        })}
      </div>
    </div>
  );
};

const List = (props) => {
  const handleRemove = () => {
    props.setTodos(props.todos.filter((v) => v !== props.todo));
  };
  return (
    <ol className="">
      <input type="checkbox" className="mx-5" />
      {props.todo}
      <button className="mx-5" onClick={handleRemove}>
        消す
      </button>
    </ol>
  );
};

export default Home;
