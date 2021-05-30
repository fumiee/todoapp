import { Headline } from "../components/headline";
import { Nav } from "../components/nav";

const ITEMS = [
  { src: "https://www.youtube.com/embed/vEBWzLoP_Zg" },
  { src: "https://www.youtube.com/embed/uZ6FBiiNJl4" },
  { src: "https://www.youtube.com/embed/Pgjs5unOMmY" },
];

const Home = () => {
  return (
    <div className="min-h-screen font-serif text-gray-600 ">
      <Headline />
      <Nav />
      <main>
        <h1 className="flex justify-center items-center text-xl h-12">
          youtuber順
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
