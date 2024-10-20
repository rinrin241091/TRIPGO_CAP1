import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate từ react-router-dom
import Header from '../layout/Header';

const UserProfile = () => {
  const navigate = useNavigate(); // Khởi tạo hook useNavigate

  // Dữ liệu cứng để test giao diện
  const users = [
    {
      id: "1",
      fullName: "Trần Văn Thắng",
      email: "tvt@gmail.com",
      phone: "0931951269",
      cccd: "098955933333",
      password: "Thangtran00030@"
    },
    {
      id: "2",
      fullName: "Nguyễn Văn A",
      email: "nva@gmail.com",
      phone: "0933555777",
      cccd: "0987777666",
      password: "Password123"
    },
    {
      id: "3",
      fullName: "Lê Thị B",
      email: "ltb@gmail.com",
      phone: "0933444555",
      cccd: "0985555444",
      password: "LeThiB456"
    }
  ];

  return (
    <div className='bg-[#f8f8f8] w-full min-h-screen overflow-auto'>
      <Header />
      
      <div className="w-full max-w-screen-lg flex flex-col md:flex-row h-auto bg-[#f8f8f8] mx-auto pt-16 md:pt-28 rounded-3xl">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 mr-0 md:mr-4 bg-white flex flex-col items-center p-6 rounded-xl shadow-md">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-4xl text-gray-400">👤</span> {/* Placeholder cho Avatar */}
          </div>
          <h2 className="mt-4 text-xl text-[#181E4B] font-semibold">{users[0].fullName}</h2> {/* Hiển thị tên người dùng đầu tiên */}
        </div>

        {/* Main content */}
        <div className="flex-grow bg-white p-8 rounded-xl shadow-md mt-6 md:mt-0">
          <h1 className="text-[20px] text-[#181E4B] font-bold mb-6">Thông tin cá nhân</h1>

          {/* Thông tin cá nhân */}
          <div className="space-y-6 text-[14px] text-[#8A8A8A]">
            <InfoRow label="Tên" value={users[0].fullName} />
            <InfoRow label="Số điện thoại" value={users[0].phone} />
            <InfoRow label="Email" value={users[0].email} />
            <InfoRow label="CCCD" value={users[0].cccd} />
            <InfoRow label="Password" value="********" /> {/* Ẩn mật khẩu */}
          </div>

          {/* Nút quay lại */}
          <div className="mt-12">
            <button 
              className="px-6 py-2 float-right bg-customBlue text-white font-medium rounded hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onClick={() => navigate(-1)} // Điều hướng về trang trước đó
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component để hiển thị từng hàng thông tin
const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center border-b pb-2">
    <div>
      <span className="block font-normal">{label}</span>
      <span className="text-[16px] text-[#181E4B] font-normal">{value}</span>
    </div>
    <button className="text-blue-600 hover:underline focus:outline-none">edit</button>
  </div>
);

export default UserProfile;
