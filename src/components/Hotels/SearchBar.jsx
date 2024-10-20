import { useState } from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS của DatePicker

const SearchBar = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    // Hàm để tính ngày hôm sau
    const getNextDay = (date) => {
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 1); // Cộng thêm 1 ngày
        return nextDay;
    };

    return (
        <div className="mt-[80px] marker:h-auto w-full flex flex-col justify-center">
            <div className="bg-cover bg-center h-80 flex items-center" 
                style={{
                    backgroundImage: "url('public/img/bannerHotel.jpeg')"
                }}
            >    
                <div className="ml-[10%]">
                    <div className="text-white text-5xl font-bold">Khách Sạn</div> 
                    <div className="text-white text-lg font-normal">Chào mừng đến với thiên đường nghỉ dưỡng</div> 
                </div>
            </div>
            <div 
                className="inline-block max-w-fit h-28 mx-auto rounded-xl bg-customBgInput" 
                style={{
                    marginTop: "-60px"
                }}                    
            >           
                <div className="mx-4 pt-2 flex space-x-2">                       
                    <div className="">
                        <div className="text-sm text-slate-600 font-medium">Điểm đến</div>
                        <div className="w-64 h-16 px-6 bg-white rounded-xl text-customBlue font-medium flex justify-between items-center">
                            <Icon icon="mdi:location" className="w-7 h-7" />
                            <select className="px-2 w-full">
                                <option>Chọn điểm đến</option>
                                <option>Đà Nẵng</option>
                                <option>Hà Nội</option>
                                <option>TP.HCM</option>
                            </select>
                        </div>
                    </div>   
                    
                    {/* Nhận phòng */}
                    <div className="">
                        <div className="text-sm text-slate-600 font-medium">Nhận phòng</div>
                        <div className="w-[200px] h-16 px-6 bg-white rounded-xl text-customBlue font-medium flex items-center">
                            <DatePicker
                                selected={checkInDate}
                                onChange={(date) => {
                                    setCheckInDate(date);
                                    // Nếu ngày trả phòng hiện tại thấp hơn ngày nhận phòng, reset lại ngày trả phòng
                                    if (checkOutDate && date >= checkOutDate) {
                                        setCheckOutDate(null);
                                    }
                                }}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Chọn ngày"
                                className="w-full px-2"
                                minDate={new Date()} // Không cho phép chọn ngày quá khứ
                            />
                        </div>
                    </div>  
                    
                    {/* Trả phòng */}
                    <div className="">
                        <div className="text-sm text-slate-600 font-medium">Trả phòng</div>
                        <div className="w-[200px] h-16 px-6 bg-white rounded-xl text-customBlue font-medium flex items-center">                   
                            <DatePicker
                                selected={checkOutDate}
                                onChange={(date) => setCheckOutDate(date)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Chọn ngày"
                                className="w-full px-2"
                                // Ngày trả phòng phải lớn hơn ngày nhận phòng 1 ngày
                                minDate={checkInDate ? getNextDay(checkInDate) : new Date()}
                            />
                        </div>
                    </div>  
                    
                    {/* Số phòng, số khách */}
                    <div className="">
                        <div className="text-sm text-slate-600 font-medium">Số phòng, số khách</div>
                        <div className="w-72 h-16 px-6 bg-white rounded-xl text-customBlue font-medium flex items-center">
                            <select className="px-2 w-full">
                                <option>1 phòng, 1 khách</option>
                                <option>1 phòng, 2 khách</option>
                                <option>2 phòng, 4 khách</option>
                            </select>
                        </div>
                    </div>  
                    
                    <button className="mt-5 w-36 h-16 rounded-xl bg-customBlue text-white font-semibold flex justify-center items-center hover:bg-blue-700 duration-300">
                        Tìm kiếm
                    </button> 
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
