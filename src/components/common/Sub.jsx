import { Icon } from "@iconify/react/dist/iconify.js";

const SubscribeSection = () => {
  return (
    <div className="relative mt-[45px] w-4/5  mx-auto h-[400px] bg-[#E7F0F8]  rounded-tl-[129px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] flex flex-col justify-center items-center">
    
      <div className="absolute bg-[#747DEF] w-[70px] h-[70px] rounded-full text-white text-[36px] flex justify-center items-center right-[-10px] top-[-10px]">
        <Icon icon="bi:send-fill" />
      </div>

      {/* Heading */}
      <div className="text-center text-gray-600 font-semibold text-3xl mb-6">
        Đăng ký để nhận thông tin, tin tức mới nhất
        <br />
        và các ưu đãi thú vị khác về TripGo
      </div>

      {/* Input and Subscribe Button */}
      <div className="flex justify-center items-center space-x-4">
        <div className="relative">
          <input
            type="email"
            placeholder="Your email"
            className="w-96 h-16 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="h-16 w-40 bg-customBlue text-white font-bold rounded-lg hover:bg-blue-700 transition">
          Đăng ký
        </button>
      </div>
    </div>
  );
};

export default SubscribeSection;
