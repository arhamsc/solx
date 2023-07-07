import { GridCreateForm } from "@components";

const GridCreatePage = () => {
  return (
    <div className="overflow-hidden xl:h-screen flex-center flex-1 padding-x pt-36 relative">
      <div className="w-1/2 absolute bg-light_green px-5 py-10 rounded-xl">
        <GridCreateForm />
      </div>
    </div>
  );
};

export default GridCreatePage;
