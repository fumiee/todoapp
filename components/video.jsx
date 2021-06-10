import { Button } from "components/button";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { callApi } from "utils/api";

const ITEMS = [
  {
    src: "https://www.youtube.com/watch?v=${VIDEOID}",
    title: "ラザニアの作り方はこれが正解（永久保存版）　グラタンレシピ　洋食",
    details: "bbb",
    more: "bbbbbb",
  },
  {
    src: "https://www.youtube.com/embed/Pgjs5unOMmY",
    title:
      "バターチキンカレー】最高に美味しいバターチキンカレーレシピ　おうちで美味しくできる方法",
    details: "ccc",
    more: "cccccc",
  },
];

export const Video = (props) => {
  const router = useRouter();
  useEffect(() => {
    callApi(props.params, props.req).then((data) => console.log(data));
  }, []);
  return (
    <div className="space-y-4">
      {ITEMS.map((item) => {
        return (
          <div key={item.src} className="border-8 border-gray-400 rounded-xl">
            <div className=" bg-gray-400 text-white border-b-4 border-gray-400">
              {item.title}
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={item.src}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <details className="text-sm pt-2 bg-gray-400 text-white">
              <summary className="list-none bg-gray-400">
                {item.details}
                <div className="flex justify-between">
                  <div className="text-gray-300 text-sm flex items-end">
                    ▼もっと見る
                  </div>
                  <Button />
                </div>
              </summary>
              <div>
                <p>{item.more}</p>
              </div>
            </details>
          </div>
        );
      })}
    </div>
  );
};
