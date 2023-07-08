import { useContext } from "react";
import { CarContext } from "../context/CarContext";
import PriceTable from "./PriceTable";

const Models = () => {
  const { car, carSel, setCarSel } = useContext(CarContext);
  return (
    <section className="mt-16 mb-28 w-[98vw]">
      <span className="flex flex-col">
        <h3 className="my-3 text-center text-2xl font-semibold">
          Vehicle Models
        </h3>
        <h3 className="my-3 text-center font-bold text-4xl mx-16">
          Our Rental Fleet
        </h3>
        <h6 className="my-3 text-gray-400 text-center mx-12">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </h6>
      </span>
      <div className="lg:flex lg:items-center lg:justify-around">
        <div id="button" className="mx-6 ease-in duration-500">
          {car.map((model) => {
            return (
              <button
                onClick={() => {
                  setCarSel(model.id);
                }}
                className={`w-full font-semibold hover:bg-orange-600 hover:text-white text-[1.5rem] flex justify-start pl-4 my-2 py-3 ${
                  carSel === model.id
                    ? "text-white bg-orange-600"
                    : "text-black bg-gray-100"
                }`}
                key={model.id}
              >
                {model.name}
              </button>
            );
          })}
        </div>

        <span className="flex mt-16 md:mt-0 flex-col items-center justify-center md:justify-around w-[94%] lg:w-[60%] md:flex-row">
          <img
            src={car
              .filter((model) => {
                return model.id === carSel;
              })
              .map((model) => {
                return model.img;
              })}
          />
          <span>
            <PriceTable />
            <button className="bg-orange-600 py-3 md:py-2 rounded  text-xl mt-6 text-white text-bold w-64 md:w-72">
              RESERVE NOW
            </button>
          </span>
        </span>
      </div>
    </section>
  );
};

export default Models;
