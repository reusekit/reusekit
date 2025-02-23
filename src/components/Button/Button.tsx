import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "primary", className }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded transition duration-200",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-300 text-black hover:bg-gray-400",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;