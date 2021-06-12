export const callApi = async (params, req) => {
  const newParams = {
    ...params,
    part: "snippet",
    maxResults: "10", // 結果の最大数
    // order: "viewCount", //再生回数の多い順
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  };

  const query = new URLSearchParams(newParams);
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/${req}?${query}`
  );
  const json = await res.json();
  return json;
};
