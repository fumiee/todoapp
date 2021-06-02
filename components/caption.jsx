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
                  ["border-yellow-200 bg-yellow-50"]: props.type === "food",
                  ["border-blue-200 bg-blue-50  bg-opacity-70"]:
                    props.type === "youtuber",
                  ["border-yellow-300 bg-yellow-50"]: props.type === "meet",
                  ["border-red-200 bg-red-50"]: props.type === "vesi",
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
