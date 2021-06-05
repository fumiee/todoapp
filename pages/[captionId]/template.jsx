import { Nav } from "components/nav";
import { useRouter } from "next/router";

export const template = () => {
  const router = useRouter();
  return (
    <div className="font-serif">
      <Nav />
      <h1 className="flex justify-center text-gray-700 text-3xl border-4 bg-gray-200">
        {router.query.captionId}
      </h1>
    </div>
  );
};

export default template;
