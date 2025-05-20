function FooterSection({ title, children }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      {children}
    </div>
  );
}

export default FooterSection;
