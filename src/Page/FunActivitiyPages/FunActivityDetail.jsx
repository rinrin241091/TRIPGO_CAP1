import React from 'react';
import ImageGallery from '../../components/common/ImageGallery';
import TourTitleAndRating from '../../components/common/TitleAndRating';
import HighlightSection from '../../components/common/HighlightSection';
import DetailSection from '../../components/common/DetailSection';
import BookingCard from '../../components/common/Bookingcard';
import Header from '../../layout/Header';
import LikeButton from '../../components/common/LikeButton';
import ShareButton from '../../components/common/shareButton';
import BookingForm from '../../components/FunActivities/FunActivitiesDetail/BookingForm';
import Footer from '../../layout/Footer';
// Mock dữ liệu tour
const mockTourData = {
  title: "Combo Vé Đảo Ký Ức Hội An & Chương Trình Ký Ức Hội An",
  rating: 4.9,
  reviewsCount: 155,
  location: "200 Nguyễn Tri Phương, Cẩm Nam, Hội An, Quảng Nam",
  duration: " 20:00 - 21:00",
  galleryImages: [
   '../../../public/img/ky-uc-hoi-an.jpg',
    '../../../public/img/ky-uc-hoi-an.jpg',
    '../../../public/img/ky-uc-hoi-an.jpg',
    '../../../public/img/ky-uc-hoi-an.jpg',

  ],
  highlights: [
    "Hãy đến với Khu vực Ký Ức Hội An để trải nghiệm các hoạt động văn hóa và đừng bỏ lỡ để bắt gặp những cảnh tượng hoành tráng của show thực cảnh Ký Ức Hội An. Du hành ngược dòng thời gian 400 năm và khám phá lịch sử của thị trấn ven biển bình dị này trong năm tiết mục kể chuyện đầy cảm hứng.",
    "Trải nghiệm muôn vàn hoạt động văn hóa và thưởng thức ẩm thực địa phương tại phố cổ Hội An",
    "Xem 5 tiết mục biểu diễn khác nhau mô tả những câu chuyện được yêu thích nhất của Việt Nam và Hội An",
    "Ngạc nhiên trước màn trình diễn của 500 nghệ sĩ tài năng trong khung cảnh tuyệt vời, và thưởng thức một chương trình thú vị bên dòng sông Hoài xinh đẹp.",
    "Tận hưởng dịch vụ đưa đón khứ hồi giữa Đà Nẵng và công viên."
  ],
  details: [
    { title: "Thông tin sản phẩm", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { title: "Thông tin quan trọng", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ],
  price: 1131000
};

const FunActivityDetail = () => {
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

export default FunActivityDetail;
