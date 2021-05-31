import { Caption } from "../components/caption";
import { Headline } from "../components/headline";
import { Nav } from "../components/nav";

const ITEMS = [
  { src: "https://www.youtube.com/embed/vEBWzLoP_Zg" },
  { src: "https://www.youtube.com/embed/uZ6FBiiNJl4" },
  { src: "https://www.youtube.com/embed/Pgjs5unOMmY" },
];
const MeetCaptions = [
  "鶏肉",
  "豚肉",
  "牛肉",
  "ウインナー",
  "ベーコン",
  "ツナ缶",
];
const vesiCaptions = [
  "キャベツ",
  "きのこ",
  "玉ねぎ",
  "なす",
  "レタス",
  "じゃがいも",
  "小松菜",
  "かぼちゃ",
  "にんじん",
  "チンゲン菜",
  "豆苗",
];
const Home = () => {
  return (
    <div className="min-h-screen font-serif text-gray-600 ">
      <Headline />
      <Nav />
      <div className="space-y-1">
        <Caption captions={MeetCaptions} type="meet" />
        <Caption captions={vesiCaptions} type="vesi" />
      </div>
      <main>
        <h1 className="flex justify-center items-center text-xl h-12">
          食材順
        </h1>
        <div className="flex flex-col justify-center space-y-3">
          {ITEMS.map((item) => {
            return (
              <div key={item.src} className="aspect-w-16 aspect-h-9">
                <iframe
                  src={item.src}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </main>
      <Nav />
    </div>
  );
};
export default Home;
