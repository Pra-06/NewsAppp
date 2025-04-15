import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setError("");

        try {
            const res = await axios.post("https://newsportalbackend-crdw.onrender.com/api/user/verify-email", {
                email,
                otp
            });
            setMessage(res.data.message);
            setOtp("");
            setEmail("");

            setTimeout(() => {
                navigate('/log-in');
            }, 1000);
        } catch (err) {
            console.error("OTP Verification Error:", err);
            setError(err.response?.data?.message || "Verification failed. Try again!");
        } finally {
            setLoading(false);
        }
    };

    const handleResendOTP = async () => {
        if (!email) {
            setError("Please enter your email before resending OTP.");
            return;
        }

        setLoading(true);
        setMessage("");
        setError("");

        try {
            const res = await axios.post("https://newsportalbackend-crdw.onrender.com/api/user/resend-otp", {
                email
            });
            setMessage(res.data.message);
        } catch (err) {
            console.error("Resend OTP Error:", err);
            setError(err.response?.data?.message || "Couldn't resend OTP.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-[#101450] mb-4">Verify Your Email</h2>
                <p className="text-sm text-center text-gray-600 mb-6">Enter the OTP sent to your email to verify your account.</p>

                {message && <p className="text-green-600 text-center mb-2">{message}</p>}
                {error && <p className="text-red-500 text-center mb-2">{error}</p>}

                <form onSubmit={handleVerify} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">OTP</label>
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#101450] text-white font-medium py-2 rounded-lg hover:bg-[#0e113f]"
                        disabled={loading}
                    >
                        {loading ? "Verifying..." : "Verify OTP"}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <button
                        onClick={handleResendOTP}
                        className="text-sm text-[#101450] hover:underline"
                        disabled={loading}
                    >
                        {loading ? "Sending OTP..." : "Resend OTP"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Verify;
