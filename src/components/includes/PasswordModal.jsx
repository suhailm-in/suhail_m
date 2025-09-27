import React, { useState } from "react";
import { X } from "lucide-react";

const PasswordModal = ({ isOpen, onClose, onSuccess, correctPassword }) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (password === correctPassword) {
            setError("");
            onSuccess();       // call parent success function
            setPassword("");
        } else {
            setError("Incorrect password. Try again.");
        }
    };

    if (!isOpen) return null; // don't render if not open

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-gray-900 text-white rounded-xl p-6 w-96 relative border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-fadeIn">
                {/* Close Button */}
                <button
                    onClick={() => {
                        setPassword("");
                        setError("");
                        onClose();
                    }}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
                >
                    <X size={22} />
                </button>

                <h3 className="text-2xl font-bold text-center mb-4">
                    Enter Password
                </h3>
                <p className="text-gray-400 text-sm text-center mb-6">
                    Please enter the password to download the CV.
                </p>

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-cyan-500/20 focus:border-cyan-500 outline-none text-white mb-4"
                />

                {error && (
                    <p className="text-red-400 text-sm text-center mb-3">
                        {error}
                    </p>
                )}

                <button
                    onClick={handleSubmit}
                    className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition font-medium"
                >
                    Download CV
                </button>
            </div>
        </div>
    );
};

export default PasswordModal;
