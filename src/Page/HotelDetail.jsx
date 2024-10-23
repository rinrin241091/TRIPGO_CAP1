import RoomCard from '../components/Hotels/RoomCard';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

const HotelDetails = () => {
  const hotel = {
    name: "Khách sạn Alibaba Đà Nẵng",
    rating: 4.5,
    pricePerNight: 180533,
    description: "Khách sạn Alibaba ở Sơn Trà, Đà Nẵng, cách Bãi biển Mỹ Khê và Sông Hàn 5 phút lái xe. Khách sạn bãi biển này cách Cầu Rồng 1,7 mi (2,8 km) và cách Chợ Hàn 1,8 mi (3 km).",
    rooms: [
      {
        title: "Superior Double Room",
        description: "Phòng đôi với giường lớn và đầy đủ tiện nghi.",
        price: 180533,
        image: "../../public/img/doubleRoom.jpg",
      },
      {
        title: "Deluxe Triple Room with City View",
        description: "Phòng ba người với tầm nhìn ra thành phố.",
        price: 411928,
        image: "../../public/img/doubleRoom.jpg",
      },
      {
        title: "Executive Suite",
        description: "Phòng suite sang trọng với đầy đủ tiện nghi.",
        price: 388420,
        image: "../../public/img/doubleRoom.jpg",
      },
    ],
    images: [
      "../../public/img/doubleRoom.jpg",
      "../../public/img/doubleRoom.jpg",
      "../../public/img/doubleRoom.jpg",
      "../../public/img/doubleRoom.jpg",
    ],
  };

  return (
    <div className="container mx-auto mt-[80px] w-4/5">
      <Header />
      
      {/* Large image and small images */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="w-full md:w-2/3">
          <img 
            src={hotel.images[0]} 
            alt="Khách sạn chính" 
            className="w-full h-[470px] object-cover rounded-md" 
          />
        </div>
        <div className="flex flex-col w-1/3">
          {hotel.images.slice(1).map((image, index) => (
            <div key={index} className="relative mb-2 h-[151px]">
              <img 
                src={image} 
                alt={`Khách sạn ${index + 2}`} 
                className="w-full h-full object-cover rounded-md" 
              />
            </div>
          ))}
        </div>
      </div>

      

      {/* Hotel details */}
      <div className="text-left mb-4">
        <h2 className="text-3xl font-bold">{hotel.name}</h2>
        <p className="text-xl">Đánh giá: <strong>{hotel.rating}</strong></p>
        <p className="mt-2 w-4/5">{hotel.description}</p>
      </div>
{/* Rating and location info */}
<div className="w-full mx-auto mt-5 flex flex-row justify-between p-6 space-y-4 md:space-y-0 md:space-x-4">
        <div className="text-left w-1/2 border rounded-3xl p-6 bg-white">
          <div className='flex'>
            <h2 className="text-5xl font-bold text-green-600">{hotel.rating}</h2>
            <div className="flex flex-col ml-2">
                <p className="text-xl font-semibold text-gray-800">Tuyệt vời</p>
                <a href="" className="text-gray-500 underline ">16 Bình luận </a>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center text-white font-semibold">N</div>
            <p className="font-semibold text-gray-700 ml-2">Người dùng</p>
          </div>
          <p className="text-gray-600 mt-2">Good. Tuyệt vời chỉ có vị trí khó đi khi bắt taxi để kiếm dễ đón khách ..</p>
        </div>

        <div className="flex flex-col mt-4 w-1/2 border rounded-3xl p-6 bg-white ">
          <p className="text-gray-600"><span className="font-semibold">📍</span> 168 Hồ Nghinh, Phước Mỹ, Đà Nẵng, Việt Nam</p>
          <p className="text-gray-600"><span className="font-semibold">✈️</span> Sân bay quốc tế Đà Nẵng, 1.2 km, Cách khách sạn khoảng 16 phút đi bộ.</p>
        </div>
      </div>
      {/* Room selection */}
      <h4 className="text-2xl font-semibold mb-4">Chọn phòng của bạn</h4>
      <div className="flex flex-col w-full">
        {hotel.rooms.map((room, index) => (
          <RoomCard room={room} key={index} />
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default HotelDetails;
