function Text({ children, className = "" }) {
  return (
    <p className={`text-sm text-[#9599a2] text-black${className}`}>
      {children}
    </p>
  );
}
export default Text;
