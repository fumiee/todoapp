import Header from "./header";
import Nav from "./nav";
import Link from "next/link";

const ITEMS = [
  { src: "https://www.youtube.com/embed/vEBWzLoP_Zg" },
  { src: "https://www.youtube.com/embed/uZ6FBiiNJl4" },
  { src: "https://www.youtube.com/embed/Pgjs5unOMmY" },
];

const Home = () => {
  return (
    <div className="min-h-screen font-serif text-gray-600 ">
      <Header />
      <div>
        <p className="border-t-2 border-gray-400 border-dashed"></p>
        <nav className="flex items-center justify-around font-serif py-2">
          <img
            className="w-1/7 h-1/2 ml-5"
            src="search.jpeg"
            alt="ルーペのアイコン"
          />
          <Link href="/food">
            <a className="flex items-center rounded-full border-4 border-yellow-200 h-10 w-10 bg-yellow-100">
              食材
            </a>
          </Link>
          <button className="flex justify-center items-center">
            y
            <span className="flex items-center justify-center rounded-full border-4 border-pink-200 h-10 w-10 mx-1">
              outube
            </span>
            r
          </button>
          <button className="text-xs rounded-full border-4 border-indigo-200 h-10 w-10">
            再生回数
          </button>
        </nav>
        <p className="border-b-2 border-gray-400 border-dashed"></p>
      </div>
      <main>
        <h1 className="flex justify-center items-center text-xl h-12">
          ＜食材順＞
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
    </div>
  );
};

export default Home;
