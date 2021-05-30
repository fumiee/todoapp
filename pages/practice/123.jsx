// import Head from "react";
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

  if (loading) return <div>...loading</div>;

  return (
    <div>
      <h1>なう</h1>
      <button onClick={getData}>botann</button>
      <main>
        {texts.map((text) => {
          return <article key={text.title}>{text.title}</article>;
        })}
        {/* <article>aaa</article>
        <article>bbb</article>
        <article>ccc</article> */}
      </main>
    </div>
  );
};

export default Home;
