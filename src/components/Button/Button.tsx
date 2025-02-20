import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "primary" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        variant === "primary" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
