import Link from "next/link";
import cc from "classcat";

export const Caption = (props) => {
  return (
    <div className="flex flex-wrap gap-y-1 gap-x-1">
      {props.captions.map((caption) => {
        return (
          <Link key={caption} href={`/${caption}/template`}>
            <a
              className={cc([
                "border-2 rounded-full p-1  text-sm",
                {
                  ["border-yellow-300"]: props.type === "food",
                  ["border-pink-300"]: props.type === "youtuber",
                  ["border-yellow-400"]: props.type === "meet",
                  ["border-green-400"]: props.type === "vesi",
                },
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
