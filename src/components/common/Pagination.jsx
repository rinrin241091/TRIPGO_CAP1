import PropTypes from 'prop-types';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {/* Nút Previous */}
      <button
        className={`px-4 py-2 border bg-white hover:bg-gray-100`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Số trang */}
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx}
          className={`px-4 py-2 border ${currentPage === idx + 1 ? 'bg-blue-500 text-white' : 'bg-white'} hover:bg-gray-100`}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}

      {/* Nút Next */}
      <button
        className={`px-4 py-2 border ${currentPage === totalPages ? 'bg-gray-300' : 'bg-white'} hover:bg-gray-100`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};
// Định nghĩa propTypes cho Pagination
Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
  };

export default Pagination;
