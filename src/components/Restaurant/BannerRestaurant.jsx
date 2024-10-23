/* eslint-disable react/no-unescaped-entities */
const BannerRestaurant = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-[400px] "
        style={{
          backgroundImage: "url('public/pho-thang-1168106 2.png')",
        }}
      >
        {/* Lớp phủ đen mờ */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        {/* Nội dung */}
        <div className="relative z-10 flex flex-col text-white pt-10 ml-[100px] ">
          <h1 className="text-5xl font-bold mt-12">Nhà Hàng</h1>
          <p className="text-lg  mt-5">
            "Khám Phá Hương Vị Đỉnh Cao Thưởng Thức Từng Món Ngon"
          </p>

          {/* Search */}
          <div className="bg-white rounded-full shadow-lg flex items-center w-full max-w-3xl mt-8 p-2">
            <input
              type="text"
              placeholder="Tìm kiếm....."
              className="w-full px-4 py-2 rounded-l-full text-gray-700 focus:outline-none text-xl ml-3"
            />
            <button className="bg-blue-800 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 whitespace-nowrap">
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerRestaurant;
