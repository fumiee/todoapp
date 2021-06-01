import Link from "next/link";
import cc from "classcat";

export const Caption = (props) => {
  return (
    <div className="flex flex-wrap gap-y-2 gap-x-2">
      {props.captions.map((caption) => {
        return (
          <Link key={caption} href={`/${caption}/template`}>
            <a
              className={cc([
                "border-2 rounded-full p-1  text-sm",
                {
                  ["border-yellow-300 bg-yellow-50"]: props.type === "food",
                  ["border-pink-300 bg-pink-50  bg-opacity-70"]:
                    props.type === "youtuber",
                  ["border-yellow-400 bg-yellow-50"]: props.type === "meet",
                  ["border-red-300 bg-red-50"]: props.type === "vesi",
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
