import { faMendeley } from "@fortawesome/free-brands-svg-icons";
import {
  faClosedCaptioning,
  faFaceSurprise,
  faHotel,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="border-t-2">
      <div className="flex justify-center text-center space-x-8 p-4 font-bold gap-10">
        <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-800 ">
          <span>
            <FontAwesomeIcon icon={faHotel} />
            Khách sạn
          </span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-800">
          <span>
            {" "}
            <FontAwesomeIcon icon={faUtensils} />
            Nhà hàng
          </span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-800">
          <span>
            {" "}
            <FontAwesomeIcon icon={faFaceSurprise} />
            Hoạt động & Vui chơi
          </span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-800">
          <span>
            {" "}
            <FontAwesomeIcon icon={faClosedCaptioning} />
            Tours
          </span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-600 hover:text-blue-800">
          <span>
            {" "}
            <FontAwesomeIcon icon={faMendeley} />
            Khám phá thêm
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
