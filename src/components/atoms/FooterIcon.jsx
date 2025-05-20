function FooterIcon({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2">
      {Icon && <Icon className="w-5 h-5 text-gray-600" />}
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  );
}

export default FooterIcon;
