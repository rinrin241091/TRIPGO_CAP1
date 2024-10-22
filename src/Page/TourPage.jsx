import Header from "../layout/Header";
import MapTour from "../components/Tour/MapTour";
import NavbarTour from "../components/Tour/NavbarTour";
import FilterTour from "../components/Tour/FilterTour";

const TourPage = () => {
  return (
    <div>
      <Header />
      <NavbarTour />
      <h1 className="mt-8 ml-10 text-3xl font-bold">Tour Đáng Chú Ý</h1>
      <MapTour />
      <FilterTour/>
    </div>
  );
};

export default TourPage;
