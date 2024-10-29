import React from 'react';
import { Icon } from '@iconify/react';

const ProgressBar = () => {
  return (
    <div className='bg-white flex justify-center'>
    <div className="flex  pt-6 items-center justify-between mb-8 w-4/5">
      {/* Bước 1 */}
      <div className="flex flex-col items-center relative">
        <div className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center">
          <Icon icon="mdi:check" className="text-white" />
        </div>
        <p className="mt-2 text-sm font-semibold text-gray-800">Chọn đơn hàng</p>
      </div>

      {/* Đường kẻ tiến trình (từ Bước 1 đến Bước 2) */}
      <div className="flex-1 h-1 bg-green-500 mb-7"></div>

      {/* Bước 2 */}
      <div className="flex flex-col items-center relative">
        <div className="bg-orange-500 text-white text-[12px] w-6 h-6 rounded-full flex items-center justify-center">
          •••
        </div>
        <p className="mt-2 text-sm font-semibold text-gray-800">Điền thông tin</p>
      </div>

      {/* Đường kẻ nền xám (từ Bước 2 đến Bước 3) */}
      <div className="flex-1 h-1 bg-gray-300 mb-7"></div>

      {/* Bước 3 */}
      <div className="flex flex-col items-center relative">
        <div className="bg-gray-300 text-gray-600 w-6 h-6 rounded-full flex items-center justify-center">
        </div>
        <p className="mt-2 text-sm font-semibold text-gray-500">Thanh toán</p>
      </div>
    </div>
    </div>
  );
};

export default ProgressBar;
