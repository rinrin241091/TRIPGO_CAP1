import EvaluateList from "../components/RestaurantDetail/EvaluateList";
import InformationRestaurant from "../components/RestaurantDetail/InformationRestaurant";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const RestantantDetails = () => {
  return (
    <div>
      <Header />
      <InformationRestaurant />
      <EvaluateList />
      <Footer />
    </div>
  );
};

export default RestantantDetails;
