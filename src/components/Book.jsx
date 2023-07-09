import { BsFillTelephoneFill } from "react-icons/bs";

const Book = () => {
  return (
    <section className="relative h-[35vh] my-10 flex flex-col md:h-[40vh]  lg:flex-row  items-center">
      <img
        src="../src/assets/images/banners/book-banner.png"
        className="absolute object-cover h-[35vh] md:h-[40vh] -z-30 opacity-100"
      />
      <h1 className="text-center md:text-5xl lg:pl-16 text-3xl mx-3 font-extrabold pt-8  text-white">
        Book a car by getting in <span className="text-orange-500">touch</span>{" "}
        with us
      </h1>
      <h3 className="text-center flex items-center justify-center md:text-5xl text-4xl mx-3 font-extrabold pt-8 animate-pulse text-orange-600">
        <BsFillTelephoneFill />
        (123) 456-789
      </h3>
    </section>
  );
};

export default Book;
