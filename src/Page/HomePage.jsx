import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
// import Footer from "../layout/Footer";
import SpecialOffer from "../components/SpecialOffer";
import TravelSection from "../components/TravelSection";
import DestinationSuggestions from "../components/DestinationSuggestions ";
import TestimonialCard from "../components/TestimonialCard";
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
    </div>
  );
};

export default HomePage;
