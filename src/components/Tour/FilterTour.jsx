import React, { useState } from "react";

const FilterTour = () => {
  const [priceRange, setPriceRange] = useState([0, 24000000]);

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    if (e.target.name === "min") {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  return (
    <div className="w-full p-4 bg-white shadow-lg rounded-lg max-w-xs">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Lựa chọn</h2>
        <button className="text-gray-500">
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="text-sm font-semibold">Khoảng giá</label>
        <div className="flex justify-between items-center mb-2">
          <input
            type="number"
            name="min"
            value={priceRange[0]}
            onChange={handlePriceChange}
            className="w-20 border rounded p-1 text-sm"
            min={0}
            max={24000000}
          />
          <span>-</span>
          <input
            type="number"
            name="max"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-20 border rounded p-1 text-sm"
            min={0}
            max={24000000}
          />
        </div>
        <input
          type="range"
          min={0}
          max={24000000}
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          className="w-full"
        />
      </div>

      {/* Tour Types */}
      <div className="mb-6">
        <label className="text-sm font-semibold">Loại hình tour:</label>
        <div className="flex flex-col mt-2">
          {[
            "Tour mạo hiểm",
            "Tour văn hóa",
            "Tour nghỉ dưỡng",
            "Tour sinh thái",
            "Tour gia đình",
            "Tour ẩm thực",
            "Tour lịch sử",
          ].map((type, index) => (
            <label key={index} className="inline-flex items-center mt-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500 h-5 w-5"
              />
              <span className="ml-2 text-sm">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <label className="text-sm font-semibold">Địa hình:</label>
        <div className="flex flex-col mt-2">
          {["Sông", "Suối", "Biển", "Núi", "Đồi", "Hồ"].map(
            (location, index) => (
              <label key={index} className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500 h-5 w-5"
                />
                <span className="ml-2 text-sm">{location}</span>
              </label>
            )
          )}
        </div>
      </div>

      {/* Duration */}
      <div className="mb-6">
        <label className="text-sm font-semibold">Thời gian:</label>
        <div className="flex flex-col mt-2">
          <label className="inline-flex items-center mt-2">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500 h-5 w-5"
            />
            <span className="ml-2 text-sm">Tour ngắn ngày</span>
          </label>
          <label className="inline-flex items-center mt-2">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500 h-5 w-5"
            />
            <span className="ml-2 text-sm">Tour dài ngày</span>
          </label>
        </div>
      </div>

      {/* Ratings */}
      <div className="mb-6">
        <label className="text-sm font-semibold">Đánh giá:</label>
        <div className="flex flex-col mt-2">
          {[1, 2, 3, 4, 5].map((rating, index) => (
            <label key={index} className="inline-flex items-center mt-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500 h-5 w-5"
              />
              <span className="ml-2 text-sm">
                {rating} <span className="text-yellow-500">★</span>
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterTour;
