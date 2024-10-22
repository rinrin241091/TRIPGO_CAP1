
import SortBar from "../components/common/SortBar";
import Sub from "../components/common/Sub";
import BannerRestaurant from "../components/Restaurant/BannerRestaurant";
import FilterSidebarRestaurant from "../components/Restaurant/FilterSidebarRestaurant";
import RestautantList from "../components/Restaurant/RestautantList";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const Restaurant = () => {
  return (
    <div className=" bg-[#F8F8F8]">
      <Header />
      <BannerRestaurant />

      {/* Main content: Filter Sidebar and Hotel Listings */}
      <div className="flex w-4/5 mx-auto mt-6">
        {/* Sidebar for filters */}
        <FilterSidebarRestaurant />

        {/* Main content area: Sorting options and hotel cards */}
        <div className="flex-1   ml-6">
          <SortBar />

          {/* RestautantList */}
          <div className="mt-[100px]">
            <RestautantList />
          </div>
        </div>
      </div>
      <Sub />
      <Footer />
    </div>
  );
};

export default Restaurant;
