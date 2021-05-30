import { useState, useEffect } from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await res.json();
  return json;
};

const Home = () => {
  const [texts, setTexts] = useState([]);
  const [loading, setLoading] = useState(true);

  const init = async () => {
    const data = await getData();
    setTexts(data);
    setLoading(false);
    console.log("initdayo");
  };

  useEffect(() => {
    console.log("eeeeeeeeeeeee");
    init().then(() => {
      console.log("GGGGGG");
    });
  }, []);

  if (loading) return <div className="text-center">...loading</div>;

  return (
    <div className="text-center">
      <h1 className=" mt-8 text-3xl text-gray-500 border-gray-700">なう</h1>
      <input className="mt-8 bg-gray-200" type="text" />
      <p>
        <button className="border-gray-400">sent</button>
      </p>
      {/* <button onClick={getData}>botann</button> */}
      <main>
        {texts.map((text) => {
          return (
            <article
              className="items-center my-8 w-1/2 h-40  text-gray-500 border-4"
              key={text.title}
            >
              {text.title}
            </article>
          );
        })}
      </main>
    </div>
  );
};

export default Home;
