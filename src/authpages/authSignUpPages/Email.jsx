import React, { useState, useEffect } from "react";
import axios from "axios";
import undrawLogo from "../../assets/SignuppageImages/undraw.png";

const Email = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      setError("⚠️ Email not found. Please go back to signup.");
    }

    console.log("📨 Email Verification Page Loaded");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "https://newsportalbackend-crdw.onrender.com/api/user/resend-otp",
        { otp }
      );

      if (response.data.success) {
        setMessage("✅ OTP verification successful! Your account is now activated.");
      } else {
        setError("❌ Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError("⚠️ Something went wrong. Please try again.");
      console.error(err);
    }
  };

  const handleResend = async () => {
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "https://newsportalbackend-crdw.onrender.com/api/user/resend-otp",
        { email }
      );

      if (response.data.success) {
        setMessage("📨 OTP has been resent successfully!");
      } else {
        setError("❌ Failed to resend OTP. Please try again.");
      }
    } catch (err) {
      setError("⚠️ Could not resend OTP. Try again later.");
      console.error(err);
    }
  };

  return (
    <div className='flex w-full flex-col-reverse items-center justify-center md:flex-row lg:h-screen bg-gray-50'>
      <div className='m-4'>
        <img src={undrawLogo} alt="Verification" className='w-72 h-72' />
      </div>

      <div className="bg-white rounded-lg shadow-lg m-4 p-6 w-full max-w-md">
        <div className="space-y-4">
          <h1 className="text-xl text-[#101450] font-semibold md:text-2xl">
            Email Verification
          </h1>

          <p className='text-sm text-[#282828]'>
            We’ve sent a code to <span className="font-semibold text-[#101450]">{email}</span> to verify your email.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col mt-4">
            <label htmlFor="otp" className="text-sm font-medium text-zinc-800 mb-1">
              Enter your Verification Code
            </label>

            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border border-gray-300 rounded-lg mb-3 p-2.5 w-full placeholder-gray-400"
              placeholder="Enter Verification Code..."
              required
            />

            {message && <p className="text-green-600 text-sm mb-2">{message}</p>}
            {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

            <div className="text-sm text-gray-600 mb-4">
              Didn’t receive the code?{" "}
              <button
                type="button"
                onClick={handleResend}
                className="text-[#101450] font-medium hover:underline"
              >
                Resend Code
              </button>
            </div>

            <button
              type="submit"
              className="bg-[#101450] text-white font-medium py-2 px-5 rounded-lg text-sm hover:bg-[#0d103b] transition"
            >
              Verify My Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
