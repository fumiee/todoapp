/* eslint-disable react/react-in-jsx-scope */
import { Button } from "components/button";
import { useEffect, useState } from "react";
import { callApi } from "utils/api";
const BASE_URL = `https://www.youtube.com/embed/`;

export const Video = (props) => {
  const [texts, setTexts] = useState([]);

  const fetchData = async () => {
    try {
      const searchData = await callApi(props.params, props.req);
      const videoIds = searchData?.items.map((item) => item.id.videoId);
      const videoData = await callApi(
        { id: videoIds.join(","), part: "snippet,id" },
        "videos"
      );
      setTexts(videoData);
      console.log(videoData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-4">
      {texts.items?.map((item) => {
        return (
          <div key={item.etag} className="border-8 border-gray-400 rounded-xl">
            <div className=" bg-gray-400 text-white border-b-4 border-gray-400">
              {item.snippet.title}
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`${BASE_URL}${item.id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <details className="text-sm pt-2 bg-gray-400 text-white">
              <summary className="list-none bg-gray-400">
                {item.snippet.description.slice(0, 50)}
                <div className="flex justify-between">
                  <div className="text-gray-300 text-sm flex items-end">
                    ▼概要欄を表示
                  </div>
                  <Button />
                </div>
              </summary>
              <div>{item.snippet.description.slice(50, 10000)}</div>
            </details>
          </div>
        );
      })}
    </div>
  );
};
