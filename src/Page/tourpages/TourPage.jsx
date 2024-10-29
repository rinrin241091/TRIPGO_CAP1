import SortBar from "../../components/common/SortBar";
import Sub from "../../components/common/Sub";
import BannerTour from "../../components/Tour/BannerTour";
import FilterSideBarTour from "../../components/Tour/FilterSideBarTuor";
import TourList from "../../components/Tour/TourList";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

const TourPage = () => {
  return (
    <div>
      <Header />
      <BannerTour />
      {/* Main content: Filter Sidebar and Hotel Listings */}
      <div className="flex w-4/5 mx-auto mt-[65px]">
        {/* Sidebar for filters */}
        <FilterSideBarTour />

        {/* Main content area: Sorting options and hotel cards */}
        <div className="flex-1   ml-6 w-full">
          
          <SortBar />

          {/* RestautantList */}
          <div className="mt-[100px]">
            <TourList />
          </div>
        </div>
      </div>
      <Sub />
      <Footer />
    </div>
  );
};

export default TourPage;
