
const QRCode = () => {
  return (
    <div className='p-4'>
        <h3 className="text-lg font-semibold mb-2">Chuyển khoản bằng QR</h3>
        <div className="  flex justify-between items-center">
        <img src="../../../public/img/QR.png" alt="QR Code" className="w-40 h-40 " />
        <ul className=" text-sm space-y-2">
            <li>Bước 1: Mở app ngân hàng và quét mã QR.</li>
            <li>Bước 2: Đảm bảo nội dung chuyển khoản là "mã đơn hàng".</li>
            <li>Bước 3: Thực hiện thanh toán.</li>
        </ul>
        </div>
    </div>
  );
};

export default QRCode;
