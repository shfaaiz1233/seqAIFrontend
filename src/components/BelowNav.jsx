import WaitingListBtn from "./WaitingListBtn";

const BelowNav = () => {
  return (
    <div className="mt-40">
      <div className="flex flex-col gap-2 w-full md:w-[70%] lg:w-[50%]  tracking-wide">
        <p className="text-xs font-semibold capitalize text-gray-200">
          Z0 R3l Vison in Real Estate
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
          Strives for Excellence in the Real Estate Sector
        </h1>
        <div className="w-[50%] mt-6 mb-44">
          <WaitingListBtn />
        </div>
      </div>
    </div>
  );
};

export default BelowNav;
