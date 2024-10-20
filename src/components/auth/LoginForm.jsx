
import PropTypes from 'prop-types';

const LoginForm = ({ emailOrPhone, password, onEmailOrPhoneChange, onPasswordChange, errors }) => (
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

    <div className="input-group">
      <label>
        Mật khẩu <span style={{ color: 'red' }}>*</span>
      </label>
      <input
        type="password"
        placeholder="Nhập mật khẩu"
        value={password}
        onChange={onPasswordChange}
        required
      />
      {errors.password && <span className="error-text">{errors.password}</span>}
    </div>

    <button type="submit" className="continue-btn">
      Đăng Nhập
    </button>
  </>
);

LoginForm.propTypes = {
  emailOrPhone: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailOrPhoneChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default LoginForm;
