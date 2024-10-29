import  { useState, useEffect } from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import RatingAndComments from '../../components/Hotels/hoteldetail/RatingAndComments';
import Amenities from '../../components/Hotels/hoteldetail/Amenities';
import Location from '../../components/Hotels/hoteldetail/Location';
import TitleAndDescription from '../../components/Hotels/hoteldetail/TitleAndDescription';
import RoomCard from '../../components/Hotels/hoteldetail/RoomCard';
import ImageGallery from '../../components/common/ImageGallery';
import SearchBar from '../../components/Hotels/hoteldetail/SearchBar';
// Dữ liệu cứng đầy đủ để hiển thị giao diện
const mockHotelData = {
  name: "Khách sạn Alibaba Đà Nẵng",
  description: "Khách sạn Alibaba ở Sơn Trà, Đà Nẵng, cách Bãi biển Mỹ Khê và Sông Hàn 5 phút lái xe. Khách sạn bãi biển này cách Cầu Rồng 1,7 mi (2,8 km) và cách Chợ Hàn 1,8 mi (3 km).",
  rating: 4.5,
  commentsCount: 16,
  amenities: [
    { name: "Quầy bar", icon: "🍹" },
    { name: "Restaurant", icon: "🍽️" },
    { name: "WiFi", icon: "📶" },
    { name: "Chỗ cất hành lý", icon: "🧳" },
    { name: "Đưa đón đến trạm xe bus, sân bay", icon: "🚐" }
  ],
  address: "02 An Tư Công Chúa Street, Mỹ An Ward, Ngũ Hành Sơn District, Đà Nẵng, Việt Nam",
  airportDistance: 4.4,
  images: [
    "../../public/img/alibaba-hotel.jpg",
    "../../public/img/alibaba-hotel.jpg",
    "../../public/img/alibaba-hotel.jpg",
    "../../public/img/alibaba-hotel.jpg",
  ],
  rooms: [
    {
      title: "Superior Double Room",
      price: 180533,
      breakfastIncluded: false,
      refundPolicy: "Hoàn tiền một phần",
      availability: "Chỉ còn 1 phòng!",
      size: 26,
      image: "../../public/img/alibaba-hotel.jpg",
      additionalImages: [
       "../../public/img/alibaba-hotel.jpg",
       "../../public/img/alibaba-hotel.jpg",
      ]
    },
    {
      title: "Deluxe Triple Room with City View",
      price: 411928,
      breakfastIncluded: true,
      refundPolicy: "Hủy miễn phí đến 21:00, 26/10/2024",
      availability: "Còn 2 phòng!",
      size: 30,
      image: "../../public/img/alibaba-hotel.jpg",
      additionalImages: [
        "../../public/img/alibaba-hotel.jpg",
       "../../public/img/alibaba-hotel.jpg",
      ]
    }
  ]
};


const HotelDetails = () => {
  const [hotel, setHotel] = useState(null);

  // Giả lập call API bằng cách sử dụng dữ liệu cứng
  useEffect(() => {
    const fetchData = async () => {
      setHotel(mockHotelData);
    };

    fetchData();
  }, []);

  if (!hotel) {
    return <p>Loading...</p>; // Hiển thị loading khi dữ liệu chưa có
  }

  return (
     <div className='bg-[#F8F8F8]'>

    <div className="container mx-auto mt-[80px] w-4/5 ">
      <Header />
      <SearchBar/>
      <div className='pt-[115px]'>
      <ImageGallery images={hotel.images}/></div>

      {/* Tiêu đề và mô tả khách sạn */}
     <TitleAndDescription 
  name={hotel.name} 
  rating={hotel.rating}
  description={hotel.description} 
  pricePerNight={hotel.rooms[0].price} 
/>


      {/* Rating, Amenities, and Location Overview Section */}
      <div className="w-full bg-white mx-auto mt-5 p-6 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-4 space-y-4 md:space-y-0">
        {/* Rating and comments */}
        <RatingAndComments rating={hotel.rating} comments={hotel.commentsCount} />

        {/* Amenities */}
        <Amenities amenities={hotel.amenities} />

        {/* Location */}
        <Location address={hotel.address} airportDistance={hotel.airportDistance} />
      </div>

      {/* Room selection */}
      <h4 className="text-3xl font-medium mb-4 mt-4">Chọn phòng của bạn</h4>
      <div className="flex flex-col w-full">
        {hotel.rooms.map((room, index) => (
          <RoomCard room={room} key={index} />
        ))}
      </div>

    
    </div> 
     <Footer />
     </div>
  );
};

export default HotelDetails;
