import NavButtonLink from "../atoms/NavButtonLink";

const NavAction = ({ buttons = [] }) => {
  return (
    <div className="w-auto h-[54px] flex gap-2 items-center justify-between ">
      {buttons.map((btn, index) => (
        <NavButtonLink
          key={index}
          to={btn.to}
          label={btn.label}
          variant={btn.variant}
        />
      ))}
    </div>
  );
};

export default NavAction;
