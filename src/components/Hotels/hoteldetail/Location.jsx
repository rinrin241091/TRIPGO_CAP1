import React from 'react';

const Location = ({ address, airportDistance }) => {
  return (
    <div className="flex flex-col justify-center border rounded-xl p-2 bg-white col-span-1">
      <p className="text-gray-600 mb-2 flex">
        <span className="mr-2">📍</span> {address}
      </p>
      <p className="text-gray-600 flex">
        <span className="mr-2">✈️</span> Sân bay quốc tế Đà Nẵng, {airportDistance} km, cách khách sạn khoảng 16 phút đi bộ.
      </p>
      <a href="#" className="text-gray-600 underline mt-4">Xem bản đồ</a>
    </div>
  );
};

export default Location;
