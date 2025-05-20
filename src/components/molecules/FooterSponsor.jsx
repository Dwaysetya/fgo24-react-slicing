function FooterSponsor({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3">
      {Icon && <Icon className="text-gray-700 w-5 h-5" />}
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default FooterSponsor;
