import { useContext } from "react";
import { CarContext } from "../context/CarContext";

const PriceTable = () => {
  const { car, carSel } = useContext(CarContext);

  return (
    <table className=" text-lg mt-10 border w-64 md:w-72">
      <tbody className="flex flex-col">
        <tr className="flex justify-around py-1 text-white  bg-orange-600 items-start">
          <td className="text-2xl flex items-center justify-center">
            <span>
              <code className="text-3xl ">
                ₹
                {car
                  .filter((model) => {
                    return model.id === carSel;
                  })
                  .map((model) => {
                    return model.Fare;
                  })}
              </code>
              / per day
            </span>
          </td>
        </tr>
        <tr className="flex justify-between mx-6 items-center my-2 border-b-2">
          <td>Mark</td>
          <td>
            {car
              .filter((model) => {
                return model.id === carSel;
              })
              .map((model) => {
                return model.Mark;
              })}
          </td>
        </tr>
        <tr className="flex justify-between mx-6 items-center my-2 border-b-2">
          <td>Model</td>
          <td>
            {car
              .filter((model) => {
                return model.id === carSel;
              })
              .map((model) => {
                return model.Model;
              })}
          </td>
        </tr>
        <tr className="flex justify-between mx-6 items-center my-2 border-b-2">
          <td>Year</td>
          <td>
            {car
              .filter((model) => {
                return model.id === carSel;
              })
              .map((model) => {
                return model.Year;
              })}
          </td>
        </tr>
        <tr className="flex justify-between mx-6 items-center my-2 border-b-2">
          <td>Doors</td>
          <td>
            {car
              .filter((model) => {
                return model.id === carSel;
              })
              .map((model) => {
                return model.Doors;
              })}
          </td>
        </tr>
        <tr className="flex justify-between mx-6 items-center my-2 border-b-2">
          <td>AC</td>
          <td>
            {car
              .filter((model) => {
                return model.id === carSel;
              })
              .map((model) => {
                return model.AC;
              })}
          </td>
        </tr>
        <tr className="flex justify-between mx-6 items-center my-2 border-b-2">
          <td>Transmission</td>
          <td>
            {car
              .filter((model) => {
                return model.id === carSel;
              })
              .map((model) => {
                return model.Transmission;
              })}
          </td>
        </tr>
        <tr className="flex justify-between mx-6 items-center my-2">
          <td>Fuel</td>
          <td>
            {car
              .filter((model) => {
                return model.id === carSel;
              })
              .map((model) => {
                return model.Fuel;
              })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PriceTable;
