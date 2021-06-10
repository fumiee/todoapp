import { Caption } from "components/caption";
import { Headline } from "components/headline";
import { Nav } from "components/nav";
import { Video } from "components/video";

const FoodCaptions = [
  "鶏もも肉",
  "豚肉",
  "大根",
  "キャベツ",
  "きのこ",
  "玉ねぎ",
];
const YoutuberCaptions = [
  "クキパパ",
  "リュウジ",
  "食堂あさごはん",
  "コウケンテツ",
];

const Home = () => {
  const params = { q: "献立" };
  const req = "search"; //HTTPリクエストの最後

  return (
    <div>
      <div className="min-h-screen font-serif text-gray-600">
        <Headline />
        <div className="sticky top-0 z-50">
          <Nav />
        </div>
        <div className="space-y-1">
          <Caption captions={FoodCaptions} type="food" />
          <Caption captions={YoutuberCaptions} type="youtuber" />
        </div>

        <main className="mt-5">
          <div className="space-y-2">
            <p className="border-t-2 border-gray-400 border-dashed"></p>
            <h1 className="flex justify-center items-center text-xl h-10">
              高評価の動画
            </h1>
          </div>
          <div className="space-y-3 mt-2"></div>
        </main>
        <Video params={params} req={req} />
      </div>
    </div>
  );
};

export default Home;
