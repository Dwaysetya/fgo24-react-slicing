import React from "react";

/**
 * @typedef {object} CustomProps
 * @property {string} [label]
 *
 * @typedef {CustomProps & React.InputHTMLAttributes<HTMLInputElement>} InputProps
 */

/**
 * @param {InputProps} props
 * @returns {JSX.Element}
 */
function Input({ id, type = "text", label, value, ...props }) {
  const baseInputStyle =
    "w-full lg:w-[384px] lg:h-[54px] rounded-full py-[15px] px-[24px] bg-white border border-[#9599a2] hover:border-[#b20f15]";

  // Untuk radio dan checkbox, tampilkan sebagai grup
  if (type === "radio" || type === "checkbox") {
    return (
      <div className="flex flex-col gap-4">
        {label && <label htmlFor={`${id}-1`}>{label}</label>}
        <div className="flex flex-row items-center gap-5">
          {Array.isArray(value) &&
            value.map((val, index) => {
              const identifier = `${id}-${index + 1}`;
              return (
                <React.Fragment key={`ip-${type}-${val}`}>
                  <input type={type} id={identifier} value={val} {...props} />
                  <label htmlFor={identifier}>{val}</label>
                </React.Fragment>
              );
            })}
        </div>
      </div>
    );
  }

  // Untuk input biasa
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        className={baseInputStyle}
        value={value}
        {...props}
      />
    </div>
  );
}

export default Input;
