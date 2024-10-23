
import PropTypes from 'prop-types';

const RoomCard = ({ room }) => {
  return (
    <div className=" flex justify-between rounded overflow-hidden shadow-lg mb-4">
      <img src={room.image} alt={room.title} className="w-1/4 h-48 object-cover rounded-3xl" />
      <div className="p-4">
        <h5 className="font-bold text-xl mb-2">{room.title}</h5>
        <p className="text-gray-700 text-base mb-4">{room.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-red-600 font-bold">Giá: {room.price.toLocaleString()} VNĐ</p>
          <button className="bg-yellow-400 text-white font-bold py-2 px-4 rounded">Đặt phòng</button>
        </div>
      </div>
    </div>
  );
};

RoomCard.propTypes = {
  room: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default RoomCard;
