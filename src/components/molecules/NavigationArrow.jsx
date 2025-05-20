import { IoArrowUpCircle, IoArrowDownCircleSharp } from "react-icons/io5";
import { MdCircle, MdOutlineCircle } from "react-icons/md";

function NavigationArrow() {
  return (
    <div className="h-[152px] flex flex-col">
      <IoArrowUpCircle className="text-white mb-3" />
      <MdOutlineCircle className="text-white" />
      <MdCircle className="text-white" />
      <MdOutlineCircle className="text-white" />
      <IoArrowDownCircleSharp className="text-white mt-3" />
    </div>
  );
}
export default NavigationArrow;
