import React from 'react';

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Tên <span className='text-red-600'>*</span></label>
          <input type="text" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="text-sm font-medium">Họ <span className='text-red-600'>*</span></label>
          <input type="text" className="w-full p-2 border rounded" required />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium">Email <span className='text-red-600'>*</span></label>
        <input type="email" className="w-full p-2 border rounded" required />
        <small className="text-gray-500">Chúng tôi sẽ gửi thông tin xác nhận tới email của bạn</small>
      </div>
      <div>
        <label className="text-sm font-medium">Số điện thoại <span className='text-red-600'>*</span></label>
        <input type="tel" className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label className="text-sm font-medium">Ghi chú hoặc yêu cầu đặc biệt</label>
        <input className="w-full p-2 border rounded mb-10"></input>
      </div>
      <p className="text-gray-500 text-sm ">
        Bằng việc nhấn "Chi tiết thanh toán" và hoàn tất đơn đặt, bạn đồng ý với{" "}
        <a href="#" className="text-blue-500">điều khoản và điều kiện</a> cũng như{" "}
        <a href="#" className="text-blue-500">chính sách bảo mật</a> của TripGo.
      </p>
      <button type="submit" className="w-full py-3 bg-customBlue text-white font-semibold rounded-md">
        CHI TIẾT THANH TOÁN
      </button>
    </form>
  );
};

export default ContactForm;
