
import ProgressBar from '../../components/booking/ProgressBar';
import BookingInfo from '../../components/booking/BookingInfo';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import QRCode from '../../components/booking/QRCode';
import ImportantNotice from '../../components/booking/ImportantNotice';
import ManualTransfer from '../../components/booking/ManualTransfer';

const WaitingScreen = () => {
  return (
    <div className='bg-[#f8f8f8] pt-[84px]'>
      <Header />
      <ProgressBar />
      <div className="container mx-auto w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <BookingInfo />
          </div>
          
          {/* QR Code  */}
          <div className="space-y-4">
            <QRCode />
            <ManualTransfer/>
           
          </div> 
        </div>
          <ImportantNotice />
      </div>
      <Footer />
    </div>
  );
};

export default WaitingScreen;
