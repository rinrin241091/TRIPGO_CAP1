import React from 'react';

const ManualTransfer = () => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Chuyển khoản thủ công</h3>
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span>Số tài khoản:</span>
          <input 
            className="font-medium bg-gray-100 border border-gray-300 rounded px-2 py-1 text-right"
            value="9353538222"
            readOnly 
          />
        </div>
        <div className="flex items-center justify-between">
          <span>Tên tài khoản:</span>
          <input 
            className="font-medium bg-gray-100 border border-gray-300 rounded px-2 py-1 text-right"
            value="ĐẶNG NGỌC SƠN"
            readOnly 
          />
        </div>
        <div className="flex items-center justify-between">
          <span>Nội dung:</span>
          <input 
            className="font-medium bg-gray-100 border border-gray-300 rounded px-2 py-1 text-right"
            value="F8C3HXRF"
            readOnly 
          />
        </div>
        <div className="flex items-center justify-between">
          <span>Chi nhánh:</span>
          <input 
            className="font-medium bg-gray-100 border border-gray-300 rounded px-2 py-1 text-right"
            value="Vietcombank Hà Nội"
            readOnly 
          />
        </div>
      </div>
    </div>
  );
};

export default ManualTransfer;
