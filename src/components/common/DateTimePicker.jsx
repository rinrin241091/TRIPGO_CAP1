import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css';

const DateTimePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="w-[200px]">
      <div className="text-sm text-slate-600 font-medium">Ngày nhận phòng</div>
      <div className="w-full h-16 px-6 bg-white rounded-xl text-customBlue font-medium flex items-center">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)} // Chỉ cho chọn một ngày
          dateFormat="dd/MM/yyyy"
          className="w-full"
          minDate={new Date()} // Không cho phép chọn ngày trong quá khứ
          placeholderText="Chọn ngày"
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
