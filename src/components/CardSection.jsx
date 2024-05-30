import CardVison from "./CardVison";

const CardSection = () => {
  const arr = [
    {
      title: "Continuous Learning and Improvement",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam accusamus incidunt aut quibusdam repellendus, harum, modi quae fugiat voluptate minus vitae, maxime deleniti dolorum? Deleniti numquam tempora voluptate harum",
      image: "imprLogo.jpg",
    },
    {
      title: "Collaboration and Partnership",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam accusamus incidunt aut quibusdam repellendus, harum, modi quae fugiat voluptate minus vitae, maxime deleniti dolorum? Deleniti numquam tempora voluptate harum",
      image: "colab.jpg",
    },
    {
      title: "Global Safety Optimization",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam accusamus incidunt aut quibusdam repellendus, harum, modi quae fugiat voluptate minus vitae, maxime deleniti dolorum? Deleniti numquam tempora voluptate harum",
      image: "global.png",
    },
    {
      title: "Innovation and Adaptability",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam accusamus incidunt aut quibusdam repellendus, harum, modi quae fugiat voluptate minus vitae, maxime deleniti dolorum? Deleniti numquam tempora voluptate harum",
      image: "innovation.jpg",
    },
    {
      title: "Priority of Safety",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam accusamus incidunt aut quibusdam repellendus, harum, modi quae fugiat voluptate minus vitae, maxime deleniti dolorum? Deleniti numquam tempora voluptate harum",
      image: "safety.jpg",
    },
    {
      title: "Ethical Excellence",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam accusamus incidunt aut quibusdam repellendus, harum, modi quae fugiat voluptate minus vitae, maxime deleniti dolorum? Deleniti numquam tempora voluptate harum",
      image: "ethics.png",
    },
    {
      title: "Data-Driven Impact",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam accusamus incidunt aut quibusdam repellendus, harum, modi quae fugiat voluptate minus vitae, maxime deleniti dolorum? Deleniti numquam tempora voluptate harum",
      image: "data.jpg",
    },
  ];
  return (
    <div className="mt-20 flex flex-wrap gap-10 justify-center">
      {arr.map((x, i) => (
        <CardVison cardData={x} key={i}/>
      ))}
    </div>
  );
};

export default CardSection;
