import React from "react";

/**
 * Customizable Chip component
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Text/content inside the chip
 * @param {string} [props.className] - Custom class for outer div
 * @param {string} [props.textClassName] - Custom class for text
 * @returns JSX.Element
 */
function Chip({ children, className, textClassName }) {
  const baseStyle =
    className || "flex bg-[#b20f15] rounded-full py-[13px] px-[24px]";
  const baseTextStyle = textClassName || "text-[#9599a2] font-black";

  return (
    <div className={baseStyle}>
      <p className={baseTextStyle}>{children}</p>
    </div>
  );
}

export default Chip;
