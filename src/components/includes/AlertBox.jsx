import React from "react";
import { FiCheckCircle, FiXCircle, FiX } from "react-icons/fi";

const AlertBox = ({ show, type, message, onClose }) => {
  if (!show) return null; // Don't render if hidden

  return (
    <div
      className={`fixed top-5 ml-5 sm:ml-0 right-5 px-6 py-4 rounded-lg shadow-lg font-medium z-50 flex items-center gap-3 transition-all duration-300
        ${type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
    >
      {/* Icon */}
      {type === "success" ? (
        <FiCheckCircle size={22} className="flex-shrink-0" />
      ) : (
        <FiXCircle size={22} className="flex-shrink-0" />
      )}

      {/* Message */}
      <span>{message}</span>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="ml-4 text-white hover:text-gray-200 font-bold text-xl leading-none"
      >
        <FiX size={20} />
      </button>
    </div>
  );
};

export default AlertBox;
