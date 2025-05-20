function Text({ children, className = "" }) {
  return <p className={`text-sm text-black${className}`}>{children}</p>;
}
export default Text;
