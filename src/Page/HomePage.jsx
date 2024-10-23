import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SpecialOffer from "../components/componentPage/SpecialOffer";
import TravelSection from "../components/componentPage/TravelSection";
import DestinationSuggestions from "../components/componentPage/DestinationSuggestions ";
import TestimonialCard from "../components/componentPage/TestimonialCard";
import Sidebar from "../layout/Sidebar";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Navbar />
      <SpecialOffer />
      <TravelSection />
      <DestinationSuggestions />
      <TestimonialCard />
      <Footer />
    </div>
  );
};

export default HomePage;
