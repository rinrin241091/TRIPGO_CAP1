import React from 'react';
import { Icon } from "@iconify/react"; // Import icon library (nếu bạn dùng iconify)

const ShareButton = () => {
  return (
    <button className="flex font-medium text-xl items-center bg-white border border-customBlue rounded-full px-8 py-4 text-customBlue hover:bg-blue-100">
      <Icon icon="mdi:share-outline" className="w-5 h-5 mr-2" />
      Chia sẻ
    </button>
  );
};

export default ShareButton;
