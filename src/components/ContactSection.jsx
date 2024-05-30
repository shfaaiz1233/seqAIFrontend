import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="mt-20 flex justify-between">
      <div className="w-full md:w-[60%]">
        <ContactForm />
      </div>
      <div className="hidden md:block w-[40%]">
        <img
          className="h-full w-full"
          src={require(`../images/contact.jpg`)}
          alt="contact-img"
        />
      </div>
    </div>
  );
};

export default ContactSection;
