import { createContext, useState } from "react";

export const CarContext = createContext({});

export const CarProvider = ({ children }) => {
  const [carSel, setCarSel] = useState("audi_a1");
  const car = [
    {
      id: "audi_a1",
      name: "Audi A1 S-Line",
      img: "../src/assets/images/cars-big/audia1.jpg",
      box: "../src/assets/images/cars-big/audi-box.png",
      Mark: "Audi",
      Model: "A1",
      Year: 2012,
      Doors: "4/5",
      AC: "Yes",
      Transmission: "Manual",
      Fuel: "Gasoline",
      Fare: 3800,
    },
    {
      id: "vw_golf_6",
      name: "VW Golf 6",
      img: "../src/assets/images/cars-big/golf6.jpg",
      box: "../src/assets/images/cars-big/golf6-box.png",
      Mark: "Volkswagen",
      Model: "Golf 6",
      Year: 2008,
      Doors: "4/5",
      AC: "Yes",
      Transmission: "Manual",
      Fuel: "Diesel",
      Fare: 3000,
    },
    {
      id: "toyota_camry",
      name: "Toyota Camry",
      img: "../src/assets/images/cars-big/toyotacamry.jpg",
      box: "../src/assets/images/cars-big/toyota-box.png",

      Mark: "Camry",
      Model: "Toyota",
      Year: 2006,
      Doors: "4/5",
      AC: "Yes",
      Transmission: "Manual",
      Fuel: "Hybrid",
      Fare: 2500,
    },
    {
      id: "bmw_320",
      name: "BMW 320 ModernLine",
      img: "../src/assets/images/cars-big/bmw320.jpg",
      box: "../src/assets/images/cars-big/bmw-box.png",
      Mark: "BMW",
      Model: "320",
      Year: 2012,
      Doors: "4/5",
      AC: "Yes",
      Transmission: "Manual",
      Fuel: "Diesel",
      Fare: 2800,
    },
    {
      id: "maercedes_benz",
      name: "Mercedes-Benz GLK",
      img: "../src/assets/images/cars-big/benz.jpg",
      box: "../src/assets/images/cars-big/benz-box.png",
      Mark: "Mercedes",
      Model: "Benz GLK",
      Year: 2006,
      Doors: "4/5",
      AC: "Yes",
      Transmission: "Manual",
      Fuel: "Diesel",
      Fare: 4500,
    },
    {
      id: "vw_passat",
      name: "VW Passat CC",
      img: "../src/assets/images/cars-big/passatcc.jpg",
      box: "../src/assets/images/cars-big/passat-box.png",
      Mark: "Volkswagen",
      Model: "Pasat CC",
      Year: 2008,
      Doors: "4/5",
      AC: "Yes",
      Transmission: "Automatic",
      Fuel: "Gasoline",
      Fare: 2000,
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
