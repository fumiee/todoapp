import { Headline } from "../../components/headline";
import { useRouter } from "next/router";

export const template = () => {
  const router = useRouter();
  return (
    <div className="font-serif">
      <Headline />
      <p className="border-b-2 border-gray-400 border-dashed mb-2"></p>
      <h1 className="flex justify-center text-gray-700 text-3xl border-4 border-double border-green-300">
        {router.query.captionId}
      </h1>
    </div>
  );
};

export default template;
