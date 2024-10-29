import React from 'react';
import ImageGallery from '../../components/common/ImageGallery';
import TourTitleAndRating from '../../components/common/TitleAndRating';
import HighlightSection from '../../components/common/HighlightSection';
import DetailSection from '../../components/common/DetailSection';
import BookingCard from '../../components/common/Bookingcard';
import Header from '../../layout/Header';
import LikeButton from '../../components/common/LikeButton';
import ShareButton from '../../components/common/shareButton';
import BookingForm from '../../components/Tour/TourDetail/BookingForm';
import Footer from '../../layout/Footer';
// Mock dữ liệu tour
const mockTourData = {
  title: "Tour Tham Quan Cố Đô Huế Trong Ngày",
  rating: 4.9,
  reviewsCount: 155,
  location: "Thành Phố Huế, Thừa Thiên Huế, Việt Nam",
  duration: "9 giờ 30 phút",
  galleryImages: [
   '../../../public/img/kinh-thanh-hue-2.jpg',
  '../../../public/img/kinh-thanh-hue-2.jpg',
   '../../../public/img/kinh-thanh-hue-2.jpg',
   '../../../public/img/kinh-thanh-hue-2.jpg',

  ],
  highlights: [
    "Tham quan Đại Nội Huế",
    "Tham quan Lăng Tự Đức",
    "Dạo thuyền trên sông Hương"
  ],
  details: [
    { title: "Khởi hành", content: "7:00: Tham quan lăng Tự Đức" },
    { title: "Ăn trưa", content: "11:00: Tại nhà hàng địa phương" },
    { title: "Quay về", content: "17:00" }
  ],
  price: 1131000
};

const TourDetailPage = () => {
  const handleBookingClick = () => {
    console.log("Đã nhấn đặt tour!");
  };

  return (
    <div className='bg-[#F8F8F8]'>
      <div className="w-4/5 mx-auto mt-[80px] ">
        <Header/>
   
      <ImageGallery images={mockTourData.galleryImages} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
  
          {/* Phần trái - Chi tiết Tour */}
          <div className="md:col-span-2">
            
            {/* Bộ sưu tập hình ảnh */}
            
            {/* Tiêu đề Tour và Đánh giá */}
            <TourTitleAndRating 
              title={mockTourData.title}
              rating={mockTourData.rating}
              reviewsCount={mockTourData.reviewsCount}
              location={mockTourData.location}
              duration={mockTourData.duration}
            />
  
            {/* Mục Nổi bật */}
            <HighlightSection highlights={mockTourData.highlights} />
  
            {/* Chi tiết Tour */}
            <DetailSection 
              departureTime="7:30"
              details={mockTourData.details} 
            />
            <BookingForm/>
          </div>
  
          {/* Phần phải - Thẻ Đặt Tour */}
          <div className="md:col-span-1">
            <BookingCard price={mockTourData.price} onBookingClick={handleBookingClick} />
            <div className='flex justify-between mt-2'>
              <LikeButton/>
              <ShareButton/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    );
};

export default TourDetailPage;
