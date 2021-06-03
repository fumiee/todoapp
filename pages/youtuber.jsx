import { Caption } from "components/caption";
import { Headline } from "components/headline";
import { Nav } from "components/nav";

const YoutuberCaptions = [
  "クキパパ",
  "リュウジ",
  "食堂あさごはん",
  "コウケンテツ",
  "はるあん",
  "さくぱん",
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
