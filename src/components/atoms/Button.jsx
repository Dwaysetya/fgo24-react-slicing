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
    primary:
      "bg-[#b20f15] text-[#9599a2] hover:bg-[#b20f15] hover:bg-transparent hover:text-[#1e2c39] hover:border hover:border-[#b20f15]",
    secondary:
      "bg-white text-[#b20f15] border border-[#9599a2] hover:bg-[#b20f15] hover:text-[#9599a2] hover:border-none",
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
