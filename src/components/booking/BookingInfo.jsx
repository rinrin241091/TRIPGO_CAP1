import React from 'react';

const BookingInfo = () => {
  return (
    <div className=" p-6 W-full mx-auto">
      <div className="flex space-x-4">
        <img
          src="../../../public/img/ky-uc-hoi-an.jpg" // Đường dẫn đến ảnh, bạn cần thay thế bằng đường dẫn thật
          alt="Hội An"
          className="w-28 h-28 rounded-md object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-customBlue">
            Combo Vé Đảo Ký Ức Hội An & Chương Trình Ký Ức Hội An
          </h3>
          <p className="text-gray-500 text-sm mt-1">Ngày: 20/12/2024</p>
          <p className="text-gray-700 text-sm mt-1 font-medium">
            Vé QR vào cửa trực tiếp vé xem chương trình Ký Ức Hội An & tùy chọn bữa tối
          </p>
          <a href="#" className="text-blue-600 text-sm mt-2 block underline">
            Xem chi tiết gói dịch vụ
          </a>
        </div>
      </div>

      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between text-gray-700">
          <span>Người lớn</span>
          <span>1 x 540.000 đ</span>
        </div>
        <div className="flex justify-between text-gray-700 mt-2">
          <span>Trẻ em</span>
          <span>1 x 135.000 đ</span>
        </div>
        <div className="flex justify-between font-semibold mt-4 text-lg">
          <span>Tổng cộng</span>
          <span>675.000 đ</span>
        </div>
      </div>

      {/* Phần mã khuyến mãi */}
      <div className="flex items-center mt-4  ">
            <input
        type="text"
        placeholder="Nhập mã khuyến mãi"
        className="flex-1 px-4 py-2 text-gray-700  border-gray-300 border-[2px] rounded-xl focus:border-blue-500 focus:outline-none"
        />

        <button className="bg-gray-300 px-4  py-2 mx-2 text-white font-semibold rounded-xl">
          Áp dụng
        </button>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600 text-sm">Tổng tiền thanh toán</span>
        <span className="text-xl font-bold text-gray-900">675.000 đ</span>
      </div>
      <p className="text-gray-500 text-sm mt-1">Giá đã bao gồm thuế, phí</p>
    </div>
  );
};

export default BookingInfo;
