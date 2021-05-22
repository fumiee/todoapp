import { useState } from "react";

<link rel="stylesheet" href="./post.css" />;

const Home = () => {
  const [name, setName] = useState([]);
  const [text, setText] = useState("");
  const [checkedFoods, setCheckedFoods] = useState([]);
  const foods = [
    {
      jaName: "じゃがいも",
      enName: "potato",
    },
    {
      jaName: "玉ねぎ",
      enName: "onion",
    },
    {
      jaName: "にんじん",
      enName: "carrot",
    },
  ];

  return (
    <div>
      <div>
        <p>
          name:
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setName([...name, text]);
            }}
          >
            ok
          </button>
        </p>
        <h1>ようこそ　{name} さん！</h1>
      </div>

      <div>
        <h2>
          <p>いま家にある食材にチェックしてね</p>
        </h2>
        {foods.map((food) => {
          return (
            <li key={food.enName}>
              <label>
                <input
                  type="checkbox"
                  name="food"
                  value={food.enName}
                  onChange={(e) => {
                    if (e.target.checked) {
                      return setCheckedFoods([...checkedFoods, e.target.value]);
                    }

                    const newArray = checkedFoods.filter((check) => {
                      return check !== e.target.value;
                    });
                    setCheckedFoods(newArray);
                  }}
                />
                {food.jaName}
              </label>
            </li>
          );
        })}
        <input
          type="submit"
          name="button"
          value="ok"
          onClick={() => {
            const dishName = getDishName(checkedFoods);
            alert(dishName);
          }}
        />
      </div>
    </div>
  );
};

const getDishName = (checked) => {
  if (
    checked.some((check) => check === "potato") &&
    checked.some((check) => check === "onion") &&
    checked.some((check) => check === "carrot")
  ) {
    return "カレーライス";
  }

  if (
    checked.some((check) => check === "potato") &&
    checked.some((check) => check === "onion")
  ) {
    return "じゃがたま";
  }

  if (
    checked.some((check) => check === "potato") &&
    checked.some((check) => check === "carrot")
  ) {
    return "じゃがにん";
  }

  if (
    checked.some((check) => check === "onion") &&
    checked.some((check) => check === "carrot")
  ) {
    return "たまにん";
  }

  if (checked.some((check) => check === "potato")) {
    return "じゃがバター";
  }

  if (checked.some((check) => check === "onion")) {
    return "たまねぎ";
  }

  if (checked.some((check) => check === "carrot")) {
    return "にんじん";
  }
};

export default Home;
