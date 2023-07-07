import { createContext, useState } from "react";

export const CarContext = createContext({});

export const CarProvider = ({ children }) => {
  const [carSel, setCarSel] = useState("audi_a1");
  const car = [
    {
      id: "audi_a1",
      name: "Audi A1 S-Line",
      img: "../src/assets/images/cars-big/audia1.jpg",
    },
    {
      id: "vw_golf_6",
      name: "VW Golf 6",
      img: "../src/assets/images/cars-big/golf6.jpg",
    },
    {
      id: "toyota_camry",
      name: "Toyota Camry",
      img: "../src/assets/images/cars-big/toyotacamry.jpg",
    },
    {
      id: "bmw_320",
      name: "BMW 320 ModernLine",
      img: "../src/assets/images/cars-big/bmw320.jpg",
    },
    {
      id: "maercedes_benz",
      name: "Mercedes-Benz GLK",
      img: "../src/assets/images/cars-big/benz.jpg",
    },
    {
      id: "vw_passat",
      name: "VW Passat CC",
      img: "../src/assets/images/cars-big/pasatcc.jpg",
    },
  ];

  const pickup = [
    "Mumbai",
    "Bengaluru",
    "Pune",
    "Chennai",
    "Hyderabad",
    "Kolkata",
    "Jaipur",
  ];

  const drop = pickup.slice().reverse();
  return (
    <CarContext.Provider value={{ car, pickup, drop, carSel, setCarSel }}>
      {children}
    </CarContext.Provider>
  );
};
