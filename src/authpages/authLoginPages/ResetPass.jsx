import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useState } from 'react';
import axios from 'axios';

const ResetPass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !otp || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('https://newsportalbackend-crdw.onrender.com/api/user/reset-password', {
        email,
        otp,
        password,
      });

      if (response.status === 200) {
        alert('Password reset successfully!');
        // Navigate to the login page after successful reset
        navigate('/log-in');
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col-reverse items-center justify-center md:flex-row lg:h-screen md:h-screen h-full">
      <div className="lg:min-w-100 bg-white rounded-lg shadow-lg border border-[#878787] m-4 p-1">
        <div className="p-6 space-y-4 sm:p-8">
          <p className="py-2 text-xl text-[#282828]">Welcome back!</p>
          <h1 className="text-xl mb-1 font-semibold md:text-2xl">Reset Password</h1>
          <p className="text-sm text-[#282828]">Set a new password to your account</p>

          <form onSubmit={handleSubmit} className="flex justify-center flex-col">

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* OTP */}
            <div className="mb-4">
              <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-800">
                OTP
              </label>
              <input
                type="text"
                name="otp"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter OTP sent to email"
                required
              />
            </div>

            {/* New Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-800">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 rounded-lg w-full p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  <img src={showPassword ? EyeOffIcon : EyeIcon} className="w-6" alt="Toggle visibility" />
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-800">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border border-gray-300 rounded-lg w-full p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  <img src={showPassword ? EyeOffIcon : EyeIcon} className="w-6" alt="Toggle visibility" />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="my-4 w-full text-white bg-[#101450] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#151a7a]"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>

            <div className="text-center">
              <p className="text-sm font-light text-gray-500">
                Go back to{' '}
                <a href="/login" className="text-[#101450] font-medium hover:underline">
                  Login
                </a>
              </p>
              <p className="text-sm font-light text-gray-500 mt-2">
                Don’t have an account?{' '}
                <a href="/sign-up" className="text-[#101450] font-medium hover:underline">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right side image */}
      <div className="m-4">
        <img src={resetPass} alt="Reset Password" className="size-70" />
      </div>
    </div>
  );
};

export default ResetPass;
