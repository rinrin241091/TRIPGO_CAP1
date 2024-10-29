import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css';

const BookingForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSeatType, setSelectedSeatType] = useState('Ghế Eco');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [startDate, setStartDate] = useState(new Date()); // Chỉ sử dụng startDate, không cần endDate

  const pricePerAdult = 540000; // Giá mỗi người lớn
  const pricePerChild = 345678; // Giá trẻ em miễn phí

  const calculateTotalPrice = () => {
    return adults * pricePerAdult + children * pricePerChild;
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSeatTypeChange = (type) => {
    setSelectedSeatType(type);
  };

  const handleAdultsChange = (operation) => {
    if (operation === 'increment') {
      setAdults(adults + 1);
    } else if (operation === 'decrement' && adults > 1) {
      setAdults(adults - 1);
    }
  };

  const handleChildrenChange = (operation) => {
    if (operation === 'increment') {
      setChildren(children + 1);
    } else if (operation === 'decrement' && children > 0) {
      setChildren(children - 1);
    }
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-md">
      <h2 className="text-lg font-semibold mb-4">Chọn ngày tham quan</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date Picker Section (Left) */}
        <div className="mb-4">
          <div className="flex flex-col">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)} // Chỉ chọn một ngày
              minDate={new Date()} // Không cho phép chọn ngày trong quá khứ
              inline
              dateFormat="dd/MM/yyyy"
              placeholderText="Chọn ngày tham quan"
            />
          </div>
        </div>

        {/* Booking Form Section (Right) */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Lựa chọn show và loại vé */}
          <div className="mb-4">
            <h3 className="text-md font-medium mb-2">Lựa chọn</h3>
            <div className="grid grid-cols-1 gap-2">
              <button
                className={`p-2 rounded-md ${selectedOption === 'option1' ? 'bg-blue-200' : 'bg-gray-200'}`}
                onClick={() => handleOptionChange('option1')}
              >
                Vé xem Show & Bữa tối menu theo set
              </button>
              <button
                className={`p-2 rounded-md ${selectedOption === 'option2' ? 'bg-blue-200' : 'bg-gray-200'}`}
                onClick={() => handleOptionChange('option2')}
              >
                Vé xem Show & Buffet "Gánh"
              </button>
              <button
                className={`p-2 rounded-md ${selectedOption === 'option3' ? 'bg-blue-200' : 'bg-gray-200'}`}
                onClick={() => handleOptionChange('option3')}
              >
                Vé xem Show & Trải nghiệm thuyền
              </button>
            </div>
          </div>

          {/* Lựa chọn loại ghế */}
          <div className="mb-4">
            <h3 className="text-md font-medium mb-2">Vé</h3>
            <div className="flex space-x-2">
              <button
                className={`p-2 flex-1 rounded-md ${selectedSeatType === 'Ghế cao' ? 'bg-blue-200' : 'bg-gray-200'}`}
                onClick={() => handleSeatTypeChange('Ghế cao')}
              >
                Ghế cao
              </button>
              <button
                className={`p-2 flex-1 rounded-md ${selectedSeatType === 'Ghế Eco' ? 'bg-blue-200' : 'bg-gray-200'}`}
                onClick={() => handleSeatTypeChange('Ghế Eco')}
              >
                Ghế Eco
              </button>
              <button
                className={`p-2 flex-1 rounded-md ${selectedSeatType === 'Ghế VIP' ? 'bg-blue-200' : 'bg-gray-200'}`}
                onClick={() => handleSeatTypeChange('Ghế VIP')}
              >
                Ghế VIP
              </button>
            </div>
          </div>

          {/* Chọn số lượng */}
          <div className="mb-4">
            <h3 className="text-md font-medium mb-2">Chọn số lượng</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Người lớn</p>
                <p className="text-sm text-gray-500">141 cm trở lên</p>
              </div>
              <div className="flex items-center">
                <button className="p-1 bg-gray-200 rounded-full" onClick={() => handleAdultsChange('decrement')}>
                  <Icon icon="fa-solid:minus" />
                </button>
                <span className="mx-2">{adults}</span>
                <button className="p-1 bg-gray-200 rounded-full" onClick={() => handleAdultsChange('increment')}>
                  <Icon icon="fa-solid:plus" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="font-medium">Trẻ em</p>
                <p className="text-sm text-gray-500">100 - 140 cm</p>
              </div>
              <div className="flex items-center">
                <button className="p-1 bg-gray-200 rounded-full" onClick={() => handleChildrenChange('decrement')}>
                  <Icon icon="fa-solid:minus" />
                </button>
                <span className="mx-2">{children}</span>
                <button className="p-1 bg-gray-200 rounded-full" onClick={() => handleChildrenChange('increment')}>
                  <Icon icon="fa-solid:plus" />
                </button>
              </div>
            </div>
          </div>

          {/* Ngày dịch vụ */}
          <div className="mb-4 bg-gray-100 p-4">
            <p className="text-sm text-gray-600">
              Ngày dịch vụ: {startDate ? startDate.toLocaleDateString() : 'Chưa chọn'}
            </p>
          </div>

          {/* Tổng giá và nút đặt ngay */}
          <div className="text-right">
            <p className="text-xl font-bold text-orange-600">{calculateTotalPrice().toLocaleString()} VND</p>
            <button className="w-full mt-4 p-2 bg-orange-500 text-white rounded-md">Đặt ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
