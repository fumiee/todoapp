import {
  FoodCaption,
  FoodCaptions,
  YoutuberCaptions,
} from "../components/caption";
import { Headline } from "../components/headline";

export const template = () => {
  return (
    <div>
      <Headline />

      <h1 className="flex justify-center text-gray-700 text-2xl">
        あ{FoodCaption}
      </h1>
    </div>
  );
};

export default template;
