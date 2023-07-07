import Typed from "react-typed";
import { AiOutlineCheckCircle, AiOutlineRight } from "react-icons/ai";
const HeroMain = () => {
  return (
    <div className="z-10 min-h-[90vh]  ">
      <div className="lg:px-14 min-h-[80vh] flex px-12 items-center md:px-36 lg:items-start flex-col lg:w-[40%]  justify-center">
        <h6 className="md:my-3 mt-7 md:mt-0 text-2xl font-bold">
          Plan Your Trip
        </h6>
        <h1 className="md:my-3 my-3 text-5xl sm:text-6xl font-bold">
          Save{" "}
          <span className="text-orange-600">
            <Typed
              strings={["big", "high", "great"]}
              typeSpeed={100}
              backSpeed={120}
              backDelay={300}
              showCursor={false}
              loop
            />
          </span>{" "}
          with our car rental
        </h1>
        <p className=" md:my-3 my-3 text-md text-gray-500 font-medium">
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>

        <span className="mt-5 flex flex-col sm:flex-row">
          <button
            className="border bg-orange-600 text-white
          text-lg justify-center items-center rounded-lg shadow-xl shadow-orange-200 ease-in duration-300 border-orange-500 px-10 sm:px-7 my-3 md:my-0 py-4 font-bold mx-2 flex items-cente hover:shadow-orange-400"
          >
            Book Ride
            <AiOutlineCheckCircle className="ml-2" size={20} />
          </button>
          <button className="border-2 ease-in duration-300 bg-black text-lg text-white hover:text-black hover:bg-white hover:border-black rounded-lg px-10 sm:px-5 my-3 md:my-0 py-4 font-bold mx-4 flex items-center justify-center ">
            Learn More
            <AiOutlineRight className="ml-2" size={18} />
          </button>
        </span>
      </div>
      <img
        className="lg:block absolute hidden right-0 -z-10 -top-10"
        src="./src/assets/images/hero/hero-bg.png"
        alt="hero-main-bg"
      />
      <img
        src="./src/assets/images/hero/main-car.png"
        className="lg:block absolute hidden lg:w-[50%] xl:w-[55%] mt-20 right-20 -z-10 top-20"
      />
    </div>
  );
};
export default HeroMain;
