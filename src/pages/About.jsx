import Book from "../components/Book";
import CompanyAbout from "../components/CompanyAbout";
import Hero from "../components/Hero";
import Plan from "../components/Plan";

const About = () => {
  return (
    <>
      <Hero name={"About"} />
      <CompanyAbout />
      <Plan />
      <Book />
    </>
  );
};

export default About;
