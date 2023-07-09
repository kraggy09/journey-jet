import BookingForm from "../components/BookingForm";
import HeroMain from "../components/HeroMain";
import Plan from "../components/Plan";
import Models from "../components/Models";
import Save from "../components/Save";
import ChooseUs from "../components/ChooseUs";
import ReviewSection from "../components/ReviewSection";
import Faq from "../components/FAQ";
import Downloads from "../components/Downloads";

const Home = () => {
  return (
    <>
      <HeroMain />
      <BookingForm />
      <Plan />
      <Models />
      <Save />
      <ChooseUs />
      <ReviewSection />
      <Downloads />
    </>
  );
};

export default Home;
