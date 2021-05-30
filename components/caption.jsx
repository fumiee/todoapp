import Link from "next/link";
import cc from "classcat";

export const FoodCaptions = ["鶏肉", "豚肉", "大根", "キャベツ", "きのこ"];
export const YoutuberCaptions = ["クキパパ", "リュウジ", "食堂あさごはん"];

export const Caption = (props) => {
  return (
    <div>
      {props.captions.map((caption) => {
        return (
          <Link key={caption} href={`/${caption}/template`}>
            <a
              className={cc([
                "border-2 rounded-full p-1 text-sm",
                props.type === "food" ? "border-yellow-200" : "border-pink-200",
              ])}
            >
              {caption}
            </a>
          </Link>
        );
      })}
    </div>
  );
};
