import React from "react";

/**
 * custom Button implementation with inherit of native button
 *
 * @typedef {object} CustomProps
 * @property {"primary" | "secondary" | "outline" | undefined} [variant]
 *
 * @typedef {CustomProps & React.HTMLAttributes<HTMLDivElement>} ButtonProps
 */

/**
 *
 * @param {ButtonProps} props
 * @returns
 */

function Button({ className = "", children, variant = "primary", ...props }) {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full transition duration-300 font-semibold";

  const variantStyle = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary:
      "bg-white text-orange-500 border border-black hover:bg-[#E95102] hover:text-white hover:border-none",
  };

  return (
    <button
      className={`${baseStyle} ${variantStyle[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
