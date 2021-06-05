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
                "border-2 rounded-lg p-1  text-sm border-gray-300",
                {
                  ["bg-yellow-100"]: props.type === "food",
                  ["bg-blue-100  bg-opacity-70"]: props.type === "youtuber",
                  ["bg-yellow-50"]: props.type === "meet",
                  ["bg-red-50"]: props.type === "vesi",
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
