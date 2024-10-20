
import PropTypes from 'prop-types';

const Register = ({ emailOrPhone, onEmailOrPhoneChange, errors }) => (
  <>
    <div className="input-group">
      <label>
        Email hoặc Số điện thoại <span style={{ color: 'red' }}>*</span>
      </label>
      <input
        type="text"
        placeholder="Nhập email hoặc số điện thoại"
        value={emailOrPhone}
        onChange={onEmailOrPhoneChange}
        required
      />
      {errors.emailOrPhone && <span className="error-text">{errors.emailOrPhone}</span>}
    </div>

    <button type="submit" className="continue-btn">
      Tiếp tục
    </button>
  </>
);

Register.propTypes = {
  emailOrPhone: PropTypes.string.isRequired,
  onEmailOrPhoneChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default Register;
