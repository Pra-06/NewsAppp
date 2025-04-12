import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import loginImg from '../../assets/loginPageImages/loginImg.png';
import EyeIcon from '../../assets/loginPageImages/eye-open.png';
import EyeOffIcon from '../../assets/loginPageImages/eye.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!values.email.trim() || !values.password.trim()) {
        setError('All fields are required');
        return;
      }

      // API Call to Login
      const response = await axios.post(
        'https://newsportalbackend-crdw.onrender.com/api/user/signin',
        values
      );

      // Check the response message or status
      alert(response.data.message);

      // Dispatch Redux action for login
      dispatch(authActions.login());

      // Store user data in localStorage
      localStorage.setItem('id', response.data.user._id);
      localStorage.setItem('role', response.data.user.role);

      // Optionally handle 'Remember me' functionality
      if (document.getElementById('remember').checked) {
        localStorage.setItem('email', values.email); // You can store email or other data
      }

      // Redirect to home or dashboard
      navigate('/');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Something went wrong!';
      setError(errorMessage);
      console.error("Login Error: ", err);
    }
  };

  return (
    <div className='flex w-full flex-col-reverse items-center justify-center md:flex-row lg:h-screen md:h-screen h-full'>
      {/* Login Form Section */}
      <div className='lg:min-w-100 bg-white rounded-lg shadow-lg border border-[#878787] m-4 p-1'>
        <div className='p-6 space-y-4 sm:p-8'>
          <p className='py-2 text-xl text-[#282828]'>Welcome back!</p>
          <h1 className='text-xl mb-1 font-semibold md:text-2xl'>Sign in to</h1>
          <p className='text-sm text-[#282828]'>Welcome back! Stay informed, stay ahead.</p>

          {error && <p className='text-red-500 text-sm'>{error}</p>}

          <form className='flex justify-center flex-col' onSubmit={handleSubmit}>
            {/* Email */}
            <div className='mb-4'>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-zinc-800'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                value={values.email}
                onChange={handleChange}
                className='border rounded-lg block w-full p-2.5 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Enter your email'
                required
              />
            </div>

            {/* Password */}
            <div className='mb-4'>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-zinc-800'>
                Password
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  id='password'
                  value={values.password}
                  onChange={handleChange}
                  className='border border-gray-300 rounded-lg w-full p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500'
                  placeholder='Enter your password'
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-3 flex items-center'
                  aria-label='Toggle password visibility'
                >
                  <img src={showPassword ? EyeOffIcon : EyeIcon} alt='Toggle password visibility' className='w-6' />
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className='flex items-center justify-between mb-4'>
              <label className='flex items-center text-xs'>
                <input
                  id='remember'
                  type='checkbox'
                  className='w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 border-gray-600'
                />
                <span className='ml-2'>Remember me</span>
              </label>
              <Link to='/forget-password' className='text-xs font-medium text-zinc-400 hover:underline'>
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='my-4 w-full text-white bg-[#101450] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#151a7a]'
            >
              Login
            </button>

            {/* Register Link */}
            <p className='text-sm font-light flex justify-center'>
              Don’t have an Account?
              <Link to='/sign-up' className='font-medium hover:underline text-[#101450] ml-1'>
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Illustration Section */}
      <div className='m-4'>
        <img src={loginImg} alt='Login Illustration' className='size-70' />
      </div>
    </div>
  );
};

export default Login;
