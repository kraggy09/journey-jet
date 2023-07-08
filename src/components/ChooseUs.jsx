import { AiOutlineRight } from "react-icons/ai";

const ChooseUs = () => {
  return (
    <div className="flex flex-col w-full mt-12 items-center justify-center">
      <img src="../src/assets/images/chooseUs/main.png" />
      <span className="flex md:justify-around lg:flex-row flex-col items-center">
        <span className="lg:w-[500px] xl:mr-32">
          <h3 className="mt-2 text-center lg:text-start lg:text-2xl text-xl font-bold">
            Why Choose Us
          </h3>
          <h1 className="mt-2 text-center lg:text-start text-4xl lg:text-5xl lg:mt-6 font-bold lg:mx-0 mx-10">
            Best valued deals you will ever find
          </h1>
          <p className="mt-2 lg:text-start lg:mx-0 lg:mt-6 text-center text-gray-500 mx-10">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <button className="mt-6 lg:mx-0 lg:mt-8 flex shadow-lg mb-6 bg-orange-600 text-white px-8 rounded shadow-orange-400 font-bold py-2 mx-auto items-center text-lg justify-center">
            Find Details <AiOutlineRight />
          </button>
        </span>
        <span>
          <div className=" my-4 md:my-10 md:flex md:justify-center md:items-center">
            <img
              className="mx-auto md:mx-0"
              src="../src/assets/images/chooseUs/icon1.png"
            />
            <span className="md:w-72 lg:ml-4">
              <h1 className="text-center lg:text-start md:text-2xl font-bold text-xl">
                Cross Country Drive
              </h1>
              <h3 className="text-gray-400 lg:text-start md:my-1 text-center md:mx-0  mx-6">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </h3>
            </span>
          </div>
          <div className=" my-4 md:my-10 md:flex md:justify-center md:items-center">
            <img
              className="mx-auto md:mx-0"
              src="../src/assets/images/chooseUs/icon2.png"
            />
            <span className="md:w-72 lg:ml-4">
              <h1 className="text-center lg:text-start md:text-2xl font-bold text-xl">
                All Inclusive Pricing
              </h1>
              <h3 className="text-gray-400 lg:text-start md:my-1 text-center md:mx-0  mx-6">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </h3>
            </span>
          </div>
          <div className=" my-4 md:my-10 md:flex md:justify-center md:items-center">
            <img
              className="mx-auto md:mx-0"
              src="../src/assets/images/chooseUs/icon3.png"
            />
            <span className="md:w-72 lg:ml-4">
              <h1 className="text-center lg:text-start md:text-2xl font-bold text-xl">
                No Hidden Charges
              </h1>
              <h3 className="text-gray-400 lg:text-start md:my-1 text-center md:mx-0  mx-6">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </h3>
            </span>
          </div>
        </span>
      </span>
    </div>
  );
};

export default ChooseUs;
