import Button from "../atoms/Button";
import image from "../../assets/images/logo/google.svg";
import image1 from "../../assets/images/logo/dana.svg";
import image2 from "../../assets/images/logo/paypal.svg";
import image3 from "../../assets/images/logo/visa.svg";
import { useState } from "react";
import NavButtonLink from "../atoms/NavButtonLink";

function PaymentCard() {
  const [isModal, setIsModal] = useState(false);

  const paymentCinema = [
    {
      name: "DATE & TIME",
      value: "Tuesday, 07 July 2020 at 02:00pms",
    },
    {
      name: "MOVIE TITLE",
      value: "Spider-Man: Homecoming",
    },
    {
      name: "CINEMA NAME",
      value: "CineOne21 Cinema",
    },
    {
      name: "NUMBER OF TICKETS",
      value: "3 pieces",
    },
    {
      name: "TOTAL PAYMENT",
      value: "$30,00",
    },
  ];
  return (
    <main className=" w-full p-10 bg-[#D6D8E7]">
      <section className="w-ful flex justify-center items-center relative">
        <section className="w-[50%] flex flex-col justify-center gap-5 p-10 bg-white">
          <div>
            <h1 className="text-2xl">Payment Info</h1>
          </div>
          {paymentCinema.map((item) => (
            <div className="w-full shadow-md p-5">
              <p className="font-normal text-sm text-[#8692A6]">{item.name}</p>
              <p className="text-base font-normal">{item.value}</p>
            </div>
          ))}
          <div>
            <h1 className="text-2xl font-bold">Personal Information</h1>
          </div>
          <div className="flex flex-col gap-5">
            <label className="text-black px-5 mt-5">Fullname</label>
            <div className="payment flex justify-between ">
              <input
                id="password"
                type="text"
                placeholder="Enter your name"
                required
                className=" w-full outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <label className="text-black px-5 mt-5">Email</label>
            <div className="payment flex justify-between w-full">
              <input
                id="password"
                type="text"
                placeholder="Enter your email"
                required
                className=" w-full outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <label className="text-black px-5 mt-5">Phone Number</label>
            <div className="payment flex justify-between w-full">
              <input
                id="password"
                type="text"
                placeholder="Enter your phone"
                required
                className=" w-full outline-none"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Payment Method</h1>
          </div>
          <div className="w-full p-10 flex gap-5">
            <Button variant="secondary">
              <img src={image} alt="logo" />
            </Button>
            <Button variant="secondary">
              <img src={image1} alt="logo" />
            </Button>
            <Button variant="secondary">
              <img src={image2} alt="logo" />
            </Button>
            <Button variant="secondary">
              <img src={image3} alt="logo" />
            </Button>
          </div>
          <div className="w-full flex justify-center items-centers mt-5">
            <NavButtonLink
              label="Pay your order"
              variant="payment"
              to="/payment"
              className="w-full"
              onClick={() => setIsModal(true)}
            />
          </div>
          {isModal && (
            <div className="flex w-full h-screen absolute z-30 justify-center items-center">
              <div className=" flex flex-col gap-10 bg-black/10 ">
                <form action="">
                  <div className="flex flex-col gap-5">
                    <label className="text-white px-5">Email</label>
                    <input
                      id="email"
                      type="text"
                      placeholder="Enter your email"
                      className="w-[384px] h-[54px] rounded-full py-[15px] px-[24px] bg-orange/50 border border-white hover:border-orange-500 text-white shadow-xl/50 "
                    />
                  </div>
                  <div className="w-[384px] h-[54px] rounded-full mt-10">
                    <Button
                      className="shadow-xl/10 w-[384px] h-[54px] rounded-full"
                      onClick={() => setIsModal(false)}
                    >
                      Send email
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

export default PaymentCard;
