import React from "react";

function Image({ src, alt, className = "" }) {
  return <img src={src} alt={alt} className={`object-cover ${className}`} />;
}
export default Image;
