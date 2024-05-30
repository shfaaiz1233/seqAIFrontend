import WaitingListBtn from "./WaitingListBtn";

const NavBar = () => {
  return (
    <div className="flex justify-between top-0 sticky bg-black px-2 md:px-16 py-6 z-100">
      <h3 className="text-xl pt-1 text-white">SequenceAI</h3>
      <div className="flex gap-6">
        <a href="/" className="text-gray-100 py-2 underline hidden md:block hover:text-cyan-500">
          {" "}
          Z0 R3L
        </a>
        <WaitingListBtn />
      </div>
    </div>
  );
};

export default NavBar;
