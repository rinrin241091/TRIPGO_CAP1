import React from 'react';

const HighlightSection = ({ highlights }) => {
  return (
    <div className="bg-[#FFF7E5] p-4 rounded-lg mb-6">
      <h3 className="text-xl font-semibold mb-4">Điểm nổi bật</h3>
      <ul className="pl-4 list-disc list-inside space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="text-gray-700">{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

export default HighlightSection;
