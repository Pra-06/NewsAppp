import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import passVeri from '../../assets/loginPageImages/pass.png';
import axios from 'axios';

const PassVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

   

    try {
      const response = await axios.post(
        'https://newsportalbackend-crdw.onrender.com/api/user/reset-password',
        {
          email,
          otp,
          newPassword: password 
        }
      );

      alert(response.data.message || "Password reset successful!");
      navigate('/log-in');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className='flex w-full flex-col-reverse items-center justify-center md:flex-row h-full lg:h-screen'>
      <div className="bg-white rounded-lg shadow-lg border border-[#878787] m-4 p-1 w-full max-w-md">
        <div className="p-6 space-y-4 sm:p-8">
          <p className='py-2 text-xl text-[#282828]'>Welcome back!</p>
          <h1 className="text-xl font-semibold md:text-2xl mb-1">Reset Your Password</h1>
          <p className='text-sm text-[#282828]'>Enter the OTP sent to your email and set a new password.</p>

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

          <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
            {/* Email */}
            <label className="text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg p-2 mb-4"
              required
            />

            {/* OTP */}
            <label className="text-sm font-medium mb-1">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP from email"
              className="border border-gray-300 rounded-lg p-2 mb-4"
              required
            />

            {/* New Password */}
            <label className="text-sm font-medium mb-1">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              className="border border-gray-300 rounded-lg p-2 mb-4"
              required
            />

            <button
              type="submit"
              className="my-2 w-full text-white bg-[#101450] hover:bg-[#1f1c70] font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Reset Password
            </button>
          

            <p className="text-sm font-light flex justify-center mt-2">
              Don’t have an Account?{" "}
              <Link to="/sign-up" className="font-medium hover:underline text-[#101450] ml-1">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right-side image */}
      <div className='m-4'>
        <img src={passVeri} alt="Password Reset" className='size-70' />
      </div>
    </div>
  );
};

export default PassVerification;
