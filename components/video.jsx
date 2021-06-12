import { Button } from "components/button";
import { useEffect, useState } from "react";
import { callApi } from "utils/api";
const BASE_URL = `https://www.youtube.com/embed/`;

// const ITEMS = [
//   {
//     title: "ラザニアの作り方はこれが正解（永久保存版）　グラタンレシピ　洋食",
//     details: "bbb",
//     more: "bbbbbb",
//   },
//   {
//     src: "https://www.youtube.com/embed/kZ9_RcGc75c",
//     title:
//       "バターチキンカレー】最高に美味しいバターチキンカレーレシピ　おうちで美味しくできる方法",
//     details: "ccc",
//     more: "cccccc",
//   },
// ];

export const Video = (props) => {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    callApi(props.params, props.req)
      .then((data) => {
        setTexts(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(texts);
  return (
    <div className="space-y-4">
      {texts.items?.map((item) => {
        return (
          <div key={item.id} className="border-8 border-gray-400 rounded-xl">
            <div className=" bg-gray-400 text-white border-b-4 border-gray-400">
              {item.snippet.title}
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`${BASE_URL}${item.id.videoId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <details className="text-sm pt-2 bg-gray-400 text-white">
              <summary className="list-none bg-gray-400">
                {item.snippet.description.substr(0, 150)}
                <div className="flex justify-between">
                  <div className="text-gray-300 text-sm flex items-end">
                    ▼もっと見る
                  </div>
                  <Button />
                </div>
              </summary>
              <div>
                <p> {item.snippet.description.substr(150)}</p>
              </div>
            </details>
          </div>
        );
      })}
    </div>
  );
};
