import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <p className="border-t-2 border-gray-400 border-dashed"></p>
      <nav className="flex items-center justify-around font-serif py-2">
        <img
          className="w-1/7 h-1/2 ml-5"
          src="search.jpeg"
          alt="ルーペのアイコン"
        />
        <Link href="/food">
          <a className="flex items-center rounded-full border-4 border-yellow-200 h-10 w-10">
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
        <button className="text-xs rounded-full border-4 border-indigo-300 h-10 w-10">
          再生回数
        </button>
      </nav>
      <p className="border-b-2 border-gray-400 border-dashed"></p>
    </div>
  );
};

export default Nav;
