const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly p-10 mt-20">
      <h3 className="text-xl pt-1 text-white">SequenceAI</h3>
      <a
        href="mailto:info@sequenceai.io"
        className="text-gray-100 py-2"
      >
        {" "}
        info@sequenceai.io
      </a>
      <a
        href="tel:(302) 123-3780"
        className="text-gray-100 py-2"
      >
        {" "}
        (302) 123-3780{" "}
      </a>
      <p className="text-gray-100 py-2">© Copyright 2024 SequenceAI LLC All Rights Reserved</p>
    </div>
  );
};

export default Footer;
