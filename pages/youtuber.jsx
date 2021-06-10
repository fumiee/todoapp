import { Caption } from "components/caption";
import { Headline } from "components/headline";
import { Nav } from "components/nav";
import { Video } from "components/video";

export const YoutuberCaptions = [
  "谷やん",
  "Peaceful Cuisine",
  "きまぐれクック",
  "JunsKitchen",
  "Chef Ropia",
  "栗原心平",
  "はるあん",
  "こっタソ",
  "かっちゃんねる",
  "一人前食堂",
  "白ごはん.com",
  "榎本美沙",
  "食堂あさごはん",
  "クキパパ",
  "リュウジ",
  "コウケンテツ",
  "さくぱん",
  "やさいのひ",
  "元気ママキッチン",
  "てぬキッチン",
  "エプロン",
  "あおにーな",
];

const Home = () => {
  return (
    <div className="min-h-screen font-serif text-gray-600 ">
      <Headline />
      <Nav />
      <div>
        <Caption captions={YoutuberCaptions} type="youtuber" />
      </div>
      <p className="mb-3"></p>
    </div>
  );
};

export default Home;
