import Home from "./pages/Home";
import Navbar from "../src/components/Navbar";
import { CarProvider } from "./context/CarContext";
import Footer from "./components/Footer";
import About from "./pages/About";
const App = () => {
  return (
    <CarProvider>
      <Navbar />
      {/**  
      <Home /> */}
      <About />
      <Footer />
    </CarProvider>
  );
};

export default App;
