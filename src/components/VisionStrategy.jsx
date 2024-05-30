import CardSection from "./CardSection";

const VisionStrategy = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col justify-center md:flex-row md:justify-between align-middle">
        <div className="w-[45%]">
          <h1 className="text-cyan-500 text-5xl font-bold">
            Vision & Strategy
          </h1>
        </div>
        <div className="flex flex-col gap-5 md:w-[55%] mt-5 md:mt-0 justify-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            expedita atque reprehenderit corporis sint vel natus esse dolore
            vero earum deleniti quas nihil facere, aspernatur est amet,
            repellendus, id possimus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            expedita atque reprehenderit corporis sint vel natus esse dolore
            vero earum deleniti quas nihil facere, aspernatur est amet,
            repellendus, id possimus.
          </p>
        </div>
      </div>
      <CardSection />
    </div>
  );
};

export default VisionStrategy;
