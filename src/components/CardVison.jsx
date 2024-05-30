const CardVison = ({ cardData }) => {
  const { title, description, image } = cardData;
  return (
    <div className="block max-w-sm p-6">
      <div className="flex gap-2">
        <img
          src={require(`../images/${image}`)}
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          alt="logo"
        />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
      </div>
      <p className="font-normal text-gray-700">{description}</p>
    </div>
  );
};

export default CardVison;
