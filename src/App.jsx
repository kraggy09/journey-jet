import Home from "./pages/Home";
import Navbar from "../src/components/Navbar";
import { CarProvider } from "./context/CarContext";
const App = () => {
  return (
    <CarProvider>
      <Navbar />
      <Home />
    </CarProvider>
  );
};

export default App;
