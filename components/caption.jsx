import Link from "next/link";

export const FoodCaptions = ["鶏肉", "豚肉", "大根", "キャベツ", "きのこ"];
export const YoutuberCaptions = ["クキパパ", "リュウジ", "食堂あさごはん"];

export const FoodCaption = () => {
  return (
    <div>
      {FoodCaptions.map((FoodCaption) => {
        return (
          <Link key={FoodCaption} href="/template">
            <a className="border-2 border-yellow-200 rounded-full p-1 text-sm">
              {FoodCaption}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export const YoutuberCaption = () => {
  return (
    <div>
      {YoutuberCaptions.map((YoutuberCaption) => {
        return (
          <Link key={YoutuberCaption} href="/template">
            <a className="border-2 border-pink-200 rounded-full p-1 text-sm">
              {YoutuberCaption}
            </a>
          </Link>
        );
      })}
    </div>
  );
};
