import { useContext } from "react";
import { CarContext } from "../context/CarContext";
import CarDetails from "./CarDetails";

const ModelHero = () => {
  const { car } = useContext(CarContext);

  console.log(car);
  return (
    <article className="grid grid-cols-1 mx-10 md:mx-48 gap-8  lg:grid-cols-2 xl:grid-cols-3 lg:mx-56">
      {car.map((model) => {
        return <CarDetails key={model.id} model={model} />;
      })}
    </article>
  );
};
export default ModelHero;
