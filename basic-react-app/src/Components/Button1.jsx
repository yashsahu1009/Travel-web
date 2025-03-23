import React from "react";

const Button1 = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-lg transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button1;
