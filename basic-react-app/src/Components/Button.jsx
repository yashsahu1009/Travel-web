import React from "react";

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition ${className}`}
  >
    {children}
  </button>
);

export default Button;
