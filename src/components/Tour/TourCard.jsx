/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react/dist/iconify.js";
import locationIcon from "@iconify/icons-mdi/map-marker"; // Biểu tượng vị trí
import starIcon from "@iconify/icons-mdi/star"; // Biểu tượng sao

const TourCard = ({ tour }) => {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl overflow-hidden shadow-lg bg-white">
      {/* Hình ảnh nhà hàng */}
      <div className="relative">
        <img
          className="w-full h-[150px] object-cover"
          src={tour.imageUrl}
          alt="hoi an"
        />
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white text-blue-500">
          <Icon icon="mdi:heart-outline" />
        </button>
      </div>

      {/* Nội dung */}
      <div className="p-3 mt-2">
        <div className="flex text-sm">
          <div className="bg-pink-200 rounded-full w-[75px] h-[22px] flex items-center justify-center">
            Relex
          </div>
          <p className="ml-5 text-slate-500">{tour.nub_day} ngày</p>
        </div>
        <h2 className="text-2xl font-bold text-blue-900 mt-3">{tour.name}</h2>
        <div className="text-sm flex mt-3">
          <Icon
            icon={locationIcon}
            width="18"
            height="18"
            className="text-pink-400"
          />
          <p className="text-gray-700 ml-1">{tour.location}</p>
        </div>
        <div className="text-sm flex mt-2">
          <Icon
            icon={starIcon}
            width="18"
            height="18"
            className="text-yellow-500"
          />
          <p className="text-yellow-400 ml-1">{tour.rating}</p>
          <p className="text-gray-700 ml-2">({tour.reviews})</p>
          <p className="text-gray-500 ml-2">{tour.nub_booking}</p>
        </div>
        <div className="text-xl flex justify-between items-center mt-4">
          <h1 className="text-gray-700 font-bold">{tour.price}/Người</h1>
          <button className="h-[37px] w-[80px] bg-blue-900 text-white rounded-2xl hover:bg-blue-700 text-sm">
            Đặt ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
