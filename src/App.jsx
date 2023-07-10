import Home from "./pages/Home";
import Navbar from "../src/components/Navbar";
import { CarProvider } from "./context/CarContext";
import Footer from "./components/Footer";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import VehicleModels from "./pages/VehicleModels";
import Testimonials from "./components/Testimonials";
import Teams from "./pages/Teams";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <CarProvider>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<VehicleModels />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="team" element={<Teams />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </CarProvider>
  );
};

export default App;
