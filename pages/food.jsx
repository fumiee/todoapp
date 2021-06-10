import { Caption } from "components/caption";
import { Headline } from "components/headline";
import { Nav } from "components/nav";

const MeetCaptions = [
  "鶏もも肉",
  "鶏むね肉",
  "豚肉",
  "牛肉",
  "魚",
  "たまご",
  "ウインナー",
  "ベーコン",
  "ツナ缶",
];
const vesiCaptions = [
  "キャベツ",
  "レタス",
  "にんじん",
  "じゃがいも",
  "玉ねぎ",
  "なす",
  "小松菜",
  "ほうれん草",
  "チンゲン菜",
  "豆苗",
  "もやし",
  "きのこ",
  "かぼちゃ",
  "レンコン",
  "春野菜",
  "夏野菜",
  "秋野菜",
  "冬野菜",
];
const Home = () => {
  return (
    <div className="min-h-screen font-serif text-gray-600 ">
      <Headline />
      <Nav />
      <div className="space-y-1">
        <p>お肉・魚</p>
        <Caption captions={MeetCaptions} type="meet" />
        <p>野菜</p>
        <Caption captions={vesiCaptions} type="vesi" />
      </div>

      <p className="mb-3"></p>
    </div>
  );
};
export default Home;
