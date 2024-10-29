import React from 'react';

const TitleAndDescription = ({ name, description, pricePerNight, rating }) => {
  const fullStars = Math.floor(rating); // Calculate the number of full stars

  return (
    <div className="text-left mb-4 flex justify-between items-center">
      <div className='w-4/5'>
        <div className="flex items-center">
          <h2 className="text-[40px] font-bold">{name}</h2>
          <div className="ml-2 text-blue-500">
            {[...Array(fullStars)].map((_, index) => (
              <span className='text-[30px]' key={index}>★</span>
            ))}
          
          </div>
        </div>
        <p className="mt-2 text-base w-4/5">{description}</p>
      </div>
      <div className="flex justify-between items-center pr-4">
        <span className="text-[26px] text-blue-700 font-bold">{pricePerNight.toLocaleString()}₫</span>
        <span className="text-gray-500 text-sm"> /Mỗi đêm</span>
      </div>
    </div>
  );
};

export default TitleAndDescription;
