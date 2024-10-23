import { Icon } from "@iconify/react/dist/iconify.js";
import PropTypes from 'prop-types';
import IconHeart from "../icon/IconHeart";
const HotelCard = ({ hotel }) => {
    return (
        <div className="w-full h-auto mt-5 flex bg-white rounded-lg shadow-md p-4 space-x-4 border border-gray-200 box-border">
            {/* Hình ảnh khách sạn */}
            <div className="relative flex-shrink-0 w-64 h-64">
                <img 
                    src={hotel.imageUrl || "public/img/khachsan.jpg"} 
                    alt={hotel.name} 
                    className="rounded-lg w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                <button className="absolute top-2 right-2 p-2 ">
          <IconHeart/>
        </button>
                </div>
            </div>

            {/* Thông tin khách sạn */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-customBlue">{hotel.name}</h3>
                    <div className="flex items-center space-x-2 mt-2">
                        <div className="flex text-customBlue">
                            {[...Array(hotel.stars)].map((_, i) => (
                                <Icon key={i} icon="mdi:star" className="text-2xl" />
                            ))}
                        </div>
                    </div>

                    {/* Tiện ích */}
                    <div className="flex space-x-2 mt-2">
                        {hotel.amenities.map((amenity, idx) => (
                            <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">
                                {amenity}
                            </span>
                        ))}
                    </div>

                    <div className="mt-2">
                        <div className="text-green-500">✓ Miễn phí hủy phòng</div>
                        <div className="text-green-500">✓ Không thanh toán ngay</div>
                        <div className="text-gray-500 mt-1">📍{hotel.location}</div>
                    </div>
                <div className="flex items-center space-x-2 mt-2">
                    <div className="text-customBlue flex">
                        <span>⭐</span>
                    </div>
                    <span className="text-gray-500">{hotel.rating}/5 ({hotel.reviews} đánh giá)</span>
                </div>
                </div>

            </div>

            {/* Giá và nút */}
            <div className="flex flex-col justify-end items-end text-right">
                <div className="text-2xl font-bold text-customBlue">{hotel.price}đ/đêm</div>
                <button className="mt-4 px-4 py-2 bg-customBlue text-white rounded-lg hover:bg-blue-700">
                    Xem chi tiết
                </button>
            </div>
        </div>
    );
};
HotelCard.propTypes = {
    hotel: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        stars: PropTypes.number.isRequired,
        amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
        location: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        reviews: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }).isRequired,
};
export default HotelCard;
