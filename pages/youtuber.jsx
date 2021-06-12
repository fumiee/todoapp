import { Caption } from "components/caption";
import { Headline } from "components/headline";
import { Nav } from "components/nav";

const YoutuberCaptions1 = [
  "谷やん",
  "Peaceful Cuisine",
  "きまぐれクック",
  "JunsKitchen",
  "Chef Ropia",
  "はるあん",
  "こっタソ",
  "かっちゃんねる",
  "一人前食堂",
  "白ごはん.com",
  "榎本美沙",
  "食堂あさごはん",
  "クキパパ",
  "さくぱん",
  "やさいのひ",
  "元気ママキッチン",
];
const YoutuberCaptions2 = ["てぬキッチン", "エプロン", "あおにーな"];

const YoutuberCaptions3 = ["リュウジ", "コウケンテツ", "栗原心平"];
const Home = () => {
  return (
    <div className="min-h-screen font-serif text-gray-600 ">
      <Headline />
      <Nav />
      <div className="space-y-2">
        <p>料理研究家</p>
        <Caption captions={YoutuberCaptions3} type="youtuber3" />
        <p>節約・時短・簡単料理</p>
        <Caption captions={YoutuberCaptions2} type="youtuber2" />
        <p className="">人気チャンネル</p>
        <Caption captions={YoutuberCaptions1} type="youtuber1" />
      </div>
      <p className="mb-3"></p>
    </div>
  );
};

export default Home;
