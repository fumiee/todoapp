import { Headline } from "../../components/headline";
import { useRouter } from "next/router";

export const template = () => {
  const router = useRouter();
  return (
    <div>
      <Headline />

      <h1 className="flex justify-center text-gray-700 text-2xl">
        {router.query.captionId}
      </h1>
    </div>
  );
};

export default template;
