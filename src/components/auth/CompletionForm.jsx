
import PropTypes from 'prop-types';

const Completion = ({
  fullName,
  emailOrPhone,
  password,
  confirmPassword,
  onFullNameChange,
  onPasswordChange,
  onConfirmPasswordChange,
  errors,
  validateEmail,
  validatePhone
}) => (
  <>
    <div className="input-group">
      <label>
        Họ và Tên <span style={{ color: 'red' }}>*</span>
      </label>
      <input
        type="text"
        placeholder="Nhập họ và tên"
        value={fullName}
        onChange={onFullNameChange}
        required
      />
    </div>

    {validateEmail(emailOrPhone) && (
      <div className="input-group">
        <label>Email</label>
        <input type="email" value={emailOrPhone} readOnly className="rOnly" />
      </div>
    )}

    {validatePhone(emailOrPhone) && (
      <div className="input-group">
        <label>Số điện thoại</label>
        <input type="text" value={emailOrPhone} readOnly className="rOnly" />
      </div>
    )}

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

    <div className="input-group">
      <label>
        Nhập lại mật khẩu <span style={{ color: 'red' }}>*</span>
      </label>
      <input
        type="password"
        placeholder="Nhập lại mật khẩu"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        required
      />
      {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
    </div>

    <button type="submit" className="continue-btn">
      Hoàn tất
    </button>
  </>
);

Completion.propTypes = {
  fullName: PropTypes.string.isRequired,
  emailOrPhone: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onFullNameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onConfirmPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  validateEmail: PropTypes.func.isRequired,
  validatePhone: PropTypes.func.isRequired
};

export default Completion;
