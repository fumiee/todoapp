import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col">
      {/* <Link header="/cooker"> */}
      <header className="flex items-center justify-center h-14 text-2xl font-serif tracking-wider">
        料理系 YouTuber
        <img className="ml-2 mr-1" src="youtube.jpeg" alt="youtubeのアイコン" />
        まとめ
      </header>
      {/* </Link> */}
    </div>
  );
};

export default Header;
