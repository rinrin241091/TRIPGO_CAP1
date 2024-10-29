import React from 'react';
import { Icon } from '@iconify/react';

const RoomCard = ({ room }) => {
  return (
    <div className="flex flex-col lg:flex-row rounded-lg  justify-between mb-6 border border-gray-200">
      {/* Room Images Section */}
      <div className="w-1/3 p-2">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-[170px] rounded-md object-cover mb-2" // Large image with fixed height of 170px
        />
        <div className="grid grid-cols-2 gap-2">
          {room.additionalImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={room.title}
              className="w-full h-[85px] rounded-md object-cover" // Small image height 85px
            />
          ))}
        </div>
        <div className="flex mt-2 items-center text-gray-600">
          <Icon icon="fa-solid:ruler-combined" className="w-5 h-5 mr-2" /> {room.size} m²
        </div>
        <div className="mt-2 grid grid-cols-2 gap-y-2">
          <p className="text-sm text-gray-600 flex items-center">
            <Icon icon="fa-solid:snowflake" className="mr-2 w-4 h-4" /> Điều hoà
          </p>
          <p className="text-sm text-gray-600 flex items-center">
            <Icon icon="fa-solid:cocktail" className="mr-2 w-4 h-4" /> Quầy bar mini
          </p>
          <p className="text-sm text-gray-600 flex items-center">
            <Icon icon="fa-solid:tshirt" className="mr-2 w-4 h-4" /> Áo choàng tắm
          </p>
          <p className="text-sm text-gray-600 flex items-center">
            <Icon icon="fa-solid:table" className="mr-2 w-4 h-4" /> Bàn
          </p>
          <p className="text-sm text-gray-600 flex items-center">
            <Icon icon="fa-solid:wine-bottle" className="mr-2 w-4 h-4" /> Nước đóng chai
          </p>
          <p className="text-sm text-gray-600 flex items-center">
            <Icon icon="fa-solid:shoe-prints" className="mr-2 w-4 h-4" /> Dép đi trong nhà
          </p>
          <a href="#" className="col-span-2 text-gray-600 underline text-sm mt-2">
            Xem thêm tiện nghi
          </a>
        </div>
      </div>

      {/* Room Details and Pricing */}
      <div className="w-full lg:w-2/3 p-4 flex flex-col justify-between bg-white">
        <div>
          <div className="flex justify-between text-lg font-semibold mb-2  border-gray-200">
            <h3>Đề xuất cho bạn</h3>
            <h3 className="mr-56">Giá</h3>
          </div>
          <hr/>
          <div className="flex justify-between items-start mb-4 mt-8">
            <div className="text-left ">
              <h4 className="text-base font-medium " >{room.title}</h4>
              <p className="text-sm text-gray-600 flex items-center">
                <Icon icon="fa-solid:utensils" className="mr-2 w-4 h-4" /> Không phục vụ bữa sáng
              </p>
              <p className="text-sm text-[#298C94] flex items-center ">
                <Icon icon="fa-solid:money-check-alt" className="mr-2 w-4 h-4" /> {room.refundPolicy}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-[#03387E]">{room.price.toLocaleString()}₫</p>
              <p className="text-sm text-gray-500">Giá 1 đêm đã bao gồm thuế</p>
              <button className="bg-[#03387E] text-white px-8 py-2 rounded-md hover:bg-blue-500 mt-2">
                Đặt
              </button>
              <p className="text-sm text-red-500 mt-2">{room.availability}</p>
            </div>
          </div>
        </div>

        {/* Second Price Option */}
         <hr/>
        <div className="flex justify-between items-start mt-4  mb-10">
          <div className="text-left">
            <h4 className="text-base font-medium">1 giường queen</h4>
            <p className="text-sm text-gray-600 flex items-center">
              <Icon icon="fa-solid:utensils" className="mr-2 w-4 h-4" /> Không phục vụ bữa sáng
            </p>
            <p className="text-sm text-[#298C94] flex items-center">
              <Icon icon="fa-solid:calendar-alt" className="mr-2 w-4 h-4" /> Hủy miễn phí đến 21:00, 26 10 2024
            </p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-[#03387E]">{(room.price * 1.15).toLocaleString()}₫</p>
            <p className="text-sm text-gray-500">Giá 1 đêm đã bao gồm thuế</p>
            <button className="bg-[#03387E] text-white px-8 py-2 rounded-md hover:bg-blue-500 mt-2">
              Đặt
            </button>
            <p className="text-sm text-red-500 mt-2">Chỉ còn 1 phòng!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
