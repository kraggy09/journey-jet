import Hero from "../components/Hero";
import Book from "../components/Book";
import ContactDetails from "../components/ContactDetails";

const Contact = () => {
  return (
    <article>
      <Hero name={"Contact"} />
      <ContactDetails />
      <Book />
    </article>
  );
};

export default Contact;
