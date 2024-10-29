import React from 'react';
import ProgressBar from '../../components/booking/ProgressBar';
import BookingInfo from '../../components/booking/BookingInfo';
import ContactForm from '../../components/booking/ContactForm';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
const BookingCheckOutPage = () => {
  return (
    <div className=' bg-[#f8f8f8] pt-[84px]'>
        <Header/>
        <ProgressBar />
        <div className="container mx-auto  w-4/5">
        {/* Progress Bar */}
      

        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="md:col-span-1  rounded-md "> 
                <h1 className="text-3xl font-bold mt-6 mb-4 text-customBlue">
            Combo Vé Đảo Ký Ức Hội An & Chương Trình Ký Ức Hội An
            </h1>
            <h2 className="text-2xl font-semibold mb-4 text-customBlue">Thông tin liên lạc</h2>
            <ContactForm />
            </div>

            {/* Booking Info & Payment Summary */}
            <div className="md:col-span-1 space-y-4 mt-24">
            <BookingInfo />
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  );
};

export default BookingCheckOutPage;
