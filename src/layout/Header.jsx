import { useState, useEffect } from 'react';
import {
  faChevronDown,
  faMagnifyingGlass,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthForm from '../components/auth/AuthForm'; 

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Toggle login form
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // Toggle register form
  const [loggedInUser, setLoggedInUser] = useState(null); // State để lưu thông tin người dùng

  // Khi component mount, kiểm tra xem người dùng đã đăng nhập chưa (lấy từ localStorage)
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setLoggedInUser(JSON.parse(user));
    }
  }, []);

  // Hàm đăng xuất người dùng
  const handleLogout = () => {
    localStorage.removeItem('user'); // Xóa thông tin người dùng khỏi localStorage
    setLoggedInUser(null); // Cập nhật state
  };

  // Handle closing of modals
  const handleClose = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  // Xử lý khi người dùng đăng nhập thành công
  const handleLoginSuccess = (data) => {
    localStorage.setItem('user', JSON.stringify(data)); // Lưu thông tin người dùng vào localStorage
    setLoggedInUser(data); // Cập nhật state
    handleClose(); // Đóng form đăng nhập
  };

  return (
    <header className=" px-[10%] fixed top-0 left-0 right-0 z-50 p-4  flex justify-between items-center h-[80px] bg-white">
      <div className="flex items-center space-x-4 ">
        <img src="logo.png" alt="Logo" />

        {/* Input search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm điểm đến"
            className="bg-blue-100 px-4 py-2 pl-10 pr-4 rounded-full border border-slate-400 focus:outline-none focus:border-blue-500"
          />
          {/* Search Icon */}
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          />
        </div>
      </div>

      <nav className="flex items-center space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
          VN|VND
        </a>
        <FontAwesomeIcon icon={faChevronDown} />
        <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
          Chuyển đi
        </a>
        <FontAwesomeIcon icon={faChevronDown} />
        <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
          Hỗ trợ
        </a>
        <FontAwesomeIcon icon={faChevronDown} />
        
        {/* Hiển thị avatar hoặc nút đăng nhập/đăng ký */}
        {loggedInUser ? (
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUserCircle} className="text-gray-600" style={{ fontSize: '32px' }} />
            <span className="text-gray-600">{loggedInUser.username}</span>
            <button
              className="px-4 py-2 font-medium rounded-lg text-white hover:bg-red-700 bg-red-500"
              onClick={handleLogout}
            >
              Đăng Xuất
            </button>
          </div>
        ) : (
          <>
            {/* Open Login Form */}
            <button
              className="px-4 py-2 font-medium rounded-lg text-white hover:bg-blue-700 bg-customBlue"
              onClick={() => setIsLoginOpen(true)}
            >
              Đăng Nhập
            </button>

            {/* Open Register Form */}
            <button
              className="px-6 py-2 rounded-lg font-medium text-customBlue border-2 border-customBlue hover:bg-blue-700 bg-white"
              onClick={() => setIsRegisterOpen(true)}
            >
              Đăng Ký
            </button>
          </>
        )}
      </nav>

      {/* Show Login Form */}
      {isLoginOpen && (
        <AuthForm
          type="login"
          onSubmit={handleLoginSuccess}
          onClose={handleClose}
        />
      )}

      {/* Show Register Form */}
      {isRegisterOpen && (
        <AuthForm
          type="register"
          onSubmit={(data) => console.log('Register Data:', data)}
          onClose={handleClose}
        />
      )}
    </header>
  );
};

export default Header;
