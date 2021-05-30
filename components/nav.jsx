import Link from "next/link";
import cc from "classcat";
import { useRouter } from "next/router";

export const Nav = () => {
  const router = useRouter();

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
          <a
            className={cc([
              "flex items-center rounded-full border-yellow-200 border-4 h-10 w-10",
              router.pathname === "/food"
                ? "bg-yellow-300"
                : "border-yellow-200",
            ])}
          >
            食材
          </a>
        </Link>
        <Link href="/youtuber">
          <a
            className={cc([
              "flex items-center justify-center rounded-full border-4 border-pink-200 h-10 w-10 mx-1",
              router.pathname === "/youtuber"
                ? "bg-pink-300"
                : "border-pink-300",
            ])}
          >
            y
            <span className="flex items-center justify-center rounded-full border-4 border-pink-200 h-10 w-10 mx-1">
              outube
            </span>
            r
          </a>
        </Link>
        <Link href="/views">
          <a
            className={cc([
              "flex justify-center text-xs rounded-full border-4 border-indigo-300 h-10 w-10 pl-1",
              router.pathname === "/views"
                ? "bg-indigo-400"
                : "border-indigo-300",
            ])}
          >
            再生回数
          </a>
        </Link>
      </nav>
      <p className="border-b-2 border-gray-400 border-dashed mb-2"></p>
    </div>
  );
};
