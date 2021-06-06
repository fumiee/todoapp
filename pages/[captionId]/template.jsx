import { Nav } from "components/nav";
import { useRouter } from "next/router";

export const template = () => {
  const router = useRouter();
  return (
    <div className="font-serif">
      <Nav />
      <h1 className="flex justify-center items-center text-xl h-10">
        {router.query.captionId}
      </h1>
    </div>
  );
};

export default template;
