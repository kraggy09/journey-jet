import { AiFillCar } from "react-icons/ai";
import { BsDoorOpenFill, BsGearFill, BsFillFuelPumpFill } from "react-icons/bs";
const CarDetails = ({ model }) => {
  return (
    <div className="my-6  flex flex-col">
      <img className="md:min-h-[40vh] w-full" src={model.box} />
      <div className=" border border-gray-400">
        <div className="mx-6">
          <span className="flex my-6 justify-between">
            <span>
              <h3 className="font-bold text-lg md:text-2xl"> {model.Mark}</h3>
              <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
            </span>
            <span className="flex flex-col items-center justify-center">
              <h3 className="text-xl md:text-2xl font-extrabold">
                &#8377;{model.Fare}
              </h3>
              <h3>per day</h3>
            </span>
          </span>
          <span className="flex items-center justify-between flex-row text-lg mt-5 md:text-xl">
            <span className="flex items-center">
              <AiFillCar />
              <h3 className="mx-2 text-gray-400">{model.Model}</h3>
            </span>
            <span className="flex items-center">
              <h3 className="mx-2 text-gray-400">{model.Doors}</h3>
              <BsDoorOpenFill />
            </span>
          </span>
          <span className="flex mb-6 items-center justify-between text-lg mt-5 md:text-xl">
            <span className="flex  items-center">
              <BsGearFill />
              <h3 className="mx-2 text-gray-400">{model.Transmission}</h3>
            </span>
            <span className="flex items-center">
              <h3 className="mx-2 text-gray-400">{model.Fuel}</h3>
              <BsFillFuelPumpFill />
            </span>
          </span>

          <div className="pt-6 w-full border-t-2 ">
            <button className="px-auto w-full py-3 mb-6 text-white font-bold rounded bg-orange-600">
              Book Ride
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
