import React from 'react';

const DetailSection = ({ departureTime, details }) => {
  return (
    <div className="bg-[#FFF7E5] p-4 rounded-lg mb-6">
      <h3 className="text-xl font-semibold mb-4">Chi tiết gói dịch vụ</h3>
      {details.map((detail, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-bold">{detail.title}</h4>
          <p className="pl-4">{detail.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailSection;
