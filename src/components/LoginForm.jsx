import { useState } from 'react';
import { loginUser } from '../services/api';
import InputItem from './InputItem';
import CheckboxItem from './CheckboxItem';

const LoginForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
    secureLogin: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checked' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setErrors({ ...errors, form: 'Please fill in all required fields' });
      return;
    }

    setIsLoading(true);
    setErrors('');

    try {
      const user = await loginUser({
        username: formData.username,
        password: formData.password,
      });

      onSuccess(user);
    } catch (error) {
      setErrors({ ...errors, form: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='right-form'>
      <h3 className='form-title'>Login</h3>
      <div className='form-area'>
        <form onSubmit={handleSubmit}>
          <InputItem
            type='text'
            name='username'
            value={formData.username}
            placeholder='username'
            pattern='^[A-Za-z0-9]+$'
            title='Only alphanumeric characters are allowed.'
            onChange={handleChange}
            required
          />
          <InputItem
            type='password'
            name='password'
            value={formData.password}
            placeholder='password'
            pattern='^[A-Za-z0-9]+$'
            title='Only alphanumeric characters are allowed.'
            onChange={handleChange}
            required
          />
          <CheckboxItem
            value='remember'
            id='rememberMe'
            name='rememberMe'
            checked={formData.rememberMe}
            onChange={handleChange}
            label='Remember Me'
          />
          <CheckboxItem
            value='security'
            id='secureLogin'
            name='secureLogin'
            checked={formData.secureLogin}
            onChange={handleChange}
            label='Secure Login'
          />

          {errors.form && <div className='error error-msg'>{errors.form}</div>}

          <div className='login-button'>
            <button type='submit' disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
