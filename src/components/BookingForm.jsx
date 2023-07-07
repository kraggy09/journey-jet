import { useContext } from "react";
import { AiFillCar, AiOutlineCalendar } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { CarContext } from "../context/CarContext";

const BookingForm = () => {
  const { car, pickup, drop } = useContext(CarContext);

  console.log(car);
  return (
    <section className="w-full mt-3  items-center z-30 justify-center mb-10 flex">
      <span className="lg:ml-14 md:ml-8 md:w-[240px] w-[90%] sm:w-64 lg:w-96 xl:w-72 min-w-[80%] min-h-[50vh]  shadow-2xl shadow-gray-500 ">
        <div className="mt-10 sm:ml-16 ml-6 text-[2rem] font-bold">
          Book a Car
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mt-10 mb-16 flex flex-row flex-wrap"
        >
          <span className="lg:ml-14 md:ml-8 md:w-[240px] sm:ml-16 ml-6 w-64 lg:w-96 xl:w-72">
            <p className="mt-5 mb-1 font-bold text-lg flex items-center justify-start">
              <AiFillCar className=" mr-2 text-orange-600" />
              Select Your Car Type
              <code className="text-orange-600">*</code>
            </p>
            <select
              className="px-5 py-2 font-medium text-gray-400 text-lg border rounded w-full  border-gray-600"
              name="cars"
            >
              <option value={null}>Select Your Car Type</option>
              {car.map((model) => {
                return (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                );
              })}
            </select>
          </span>
          <span className="lg:ml-14 md:ml-8 md:w-[240px] sm:ml-16 ml-6 w-64 lg:w-96 xl:w-72">
            <p className="mt-5 mb-1 font-bold text-lg flex items-center justify-start">
              <FaLocationArrow className=" mr-2 text-orange-600" />
              PickUp <code className="text-orange-600">*</code>
            </p>
            <select
              className="px-5 py-2 font-medium text-gray-400 text-lg border rounded w-full  border-gray-600  "
              name="pick-up"
            >
              {pickup.map((city) => {
                return (
                  <option key={city} value={city}>
                    {city}
                  </option>
                );
              })}
            </select>
          </span>
          <span className="lg:ml-14 md:ml-8 md:w-[240px] sm:ml-16 ml-6 w-64 lg:w-96 xl:w-72">
            <p className="mt-5 mb-1 font-bold text-lg flex items-center justify-start">
              <FaLocationArrow className=" mr-2 text-orange-600" />
              Drop Off <code className="text-orange-600">*</code>
            </p>
            <select
              className="px-5 py-2  font-medium text-gray-400 text-lg border rounded w-full  border-gray-600  "
              name="drop"
            >
              {drop.map((city) => {
                return (
                  <option key={city} value={city}>
                    {city}
                  </option>
                );
              })}
            </select>
          </span>
          <span className="lg:ml-14 md:ml-8 md:w-[240px] sm:ml-16 ml-6 w-64 lg:w-96 xl:w-72">
            <p className="mt-5 mb-1 font-bold text-lg flex items-center justify-start">
              <AiOutlineCalendar className=" mr-2 text-orange-600" />
              Pick Up <code className="text-orange-600">*</code>
            </p>
            <input
              required
              type="date"
              className="px-5 py-2  font-medium text-gray-400 text-lg border rounded w-full  border-gray-600  "
            />
          </span>

          <span className="lg:ml-14 md:ml-8 md:w-[240px] sm:ml-16 ml-6 w-64 lg:w-96 xl:w-72">
            <p className="mt-5 mb-1 font-bold text-lg flex items-center justify-start">
              <AiOutlineCalendar className=" mr-2 text-orange-600" />
              Drop Off <code className="text-orange-600">*</code>
            </p>
            <input
              required
              type="date"
              className="px-5 py-2  font-medium text-gray-400 text-lg border rounded w-full  border-gray-600  "
            />
          </span>

          <span className="lg:ml-14 md:ml-8 md:w-[240px] sm:ml-16 ml-6 w-64 lg:w-96 xl:w-72 px-2 py-2  font-medium flex items-end text-gray-400 text-lg rounded  border-gray-600  ">
            <button className="px-2 flex bg-orange-600 text-white items-center justify-center min-w-full  py-3 text-lg mt-10 shadow-lg hover:shadow-orange-500 ease-in duration-200 hover:border-orange-500 border ">
              Submit
            </button>
          </span>
        </form>
      </span>
    </section>
  );
};

export default BookingForm;
