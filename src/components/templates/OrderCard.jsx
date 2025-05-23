import Image1 from "../../assets/images/signup/image 1.png";
import Button from "../atoms/Button";
import SeatGrid from "../organisms/SeatGrid";
import order from "../../assets/images/orderpage/order.svg";
import NavButtonLink from "../atoms/NavButtonLink";

function OrderCard() {
  const orderCinema = [
    {
      name: "Movie selected",
      value: "Spider-Man: Homecoming",
    },
    {
      name: "Tuesday, 07 July 2020",
      value: "13:00pm",
    },
    {
      name: "One ticket price",
      value: "$10",
    },
    {
      name: "Seat choosed",
      value: "C4, C5, C6",
    },
  ];
  return (
    <main>
      <section className="w-ful h-[1072px] flex justify-center items-center">
        <section className="w-[80%] h-[80%] flex justify-center gap-5">
          <div className="w-[70%] p-10 flex flex-col justify-center items-center shadow-2xl gap-10">
            <div className="w-full h-auto flex justify-center items-center p-2 gap-5 shadow-md">
              <div className="w-[30%] h-[117px]">
                <img src={Image1} alt="movie datails" />
              </div>
              <div className="flex flex-col gap-5 w-full">
                <div className="w-full h-[20px]">
                  <h1 className="font-semibold text-2xl">
                    Spider-Man: Homecoming
                  </h1>
                </div>
                <div className="w-full h-[30px] mb-2">
                  <div className=" flex gap-10">
                    <h1 className="div-buttons-1">Action</h1>
                    <h1 className="div-buttons-1">Action</h1>
                  </div>
                </div>
                <div className="w-full h-[30px] justify-center items-center">
                  <p className="text-base font-normal">Regular - 13:00 PM</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="font-bold text-2xl">Choose Your Seat</h1>
            </div>
            <div className="w-[50%] h-5 flex justify-center items-center bg-orange-500 rounded-tl-full rounded-tr-full">
              <p className="text-sm font-semibold text-white">Screen</p>
            </div>
            <div className="w-full">
              <SeatGrid />
            </div>
            <div className="w-full">
              <h1 className="font-semibold text-lg">Seating key</h1>
            </div>
            <div className="w-full justify-center items-center flex gap-10">
              <h1 className="text-sm font-semibold">Available</h1>
              <div className="w-[26px] h-[26px] bg-[#1D4ED8]"></div>
              <h1 className="text-sm font-semibold">Selected</h1>
              <div className="w-[26px] h-[26px] bg-[#6E7191]"></div>
              <h1 className="text-sm font-semibold">Sold</h1>
            </div>
          </div>
          <div className="w-[30%] flex flex-col">
            <div className="flex justify-center items-center flex-col shadow-md gap-5">
              <div>
                <img src={order} alt="order" />
              </div>
              <div>
                <h1>CineOne21 Cinema</h1>
              </div>
              {orderCinema.map((item, index) => (
                <div className="flex w-full justify-between p-5" key={index}>
                  <p className="text-sm">{item.name}</p>
                  <p className="font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between shadow-md p-5">
              <p className="text-lg font-semibold">Total Payment</p>
              <p className="text-[#E95102] font-bold text-2xl">$30</p>
            </div>
            <div className="w-full flex justify-center items-centers mt-5">
              <NavButtonLink
                label="Checkout Now"
                variant="payment"
                to="/payment"
                className="w-full"
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default OrderCard;
