const ContactForm = () => {
  return (
    <div className="flex flex-col gap-10 justify-center">
      <h1 className="text-4xl font-bold text-cyan-500 text-left tracking-wide">
        Let's Talk!
      </h1>
      <p className="text-xl text-left tracking-wide">
        Join us as we embark on this journey to lead the future of AI innovation
        together! Drop us a note and we'll get back to you within 24 hours.
      </p>
      <div className="flex justify-between gap-4">
        <div className="border-b border-gray-900 w-[50%]">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="First Name"
            aria-label="First name"
            required
          />
        </div>
        <div className="border-b border-gray-900 w-[50%]">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Last Name"
            aria-label="Last name"
            required
          />
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <div className="border-b border-gray-900 w-[50%]">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="Email Address"
            aria-label="Email"
            required
          />
        </div>
        <div className="border-b border-gray-900 w-[50%]">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="tell"
            placeholder="Phone Number"
            aria-label="Phone Number"
            required
          />
        </div>
      </div>
      <div className="border-b border-gray-900">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Where did you hear about us?"
          aria-label="text-info"
          required
        />
      </div>
      <div className="border-b border-gray-900">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900"
          placeholder="Write your message here"
        ></textarea>
      </div>
    </div>
  );
};

export default ContactForm;
