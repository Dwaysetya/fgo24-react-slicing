import Button from "../atoms/Button";
import image from "../../assets/images/logo/google.svg";
import image1 from "../../assets/images/logo/dana.svg";
import image2 from "../../assets/images/logo/paypal.svg";
import image3 from "../../assets/images/logo/visa.svg";
import { useState } from "react";
import NavButtonLink from "../atoms/NavButtonLink";
import Chip from "../atoms/Chip";
import { Link } from "react-router-dom";

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
    <main className=" w-full bg-[#D6D8E7]">
      {isModal && (
        <div className="flex w-full min-h-svw absolute z-99 justify-center items-center bg-black/90 m-0">
          <div className=" flex w-full h-screen flex-col gap-10 bg-black/10  justify-center items-center">
            <div className="w-[573px] bg-white rounded-3xl p-10 flex flex-col justify-center items-center gap-7">
              <h1 className="text-2xl font-bold">Payment Info</h1>
              <div className="flex w-full items-center justify-between gap-5">
                <p className="font-normal text-sm">No. Rekening Virtual :</p>
                <p>12321328913829724</p>
                <Chip>Copy</Chip>
              </div>
              <div className="flex w-full items-center justify-between gap-5">
                <p className="font-normal text-sm">Total Payment :</p>
                <p className="text-[#1D4ED8] text-lg font-bold">$30</p>
              </div>
              <div className="flex w-full items-center justify-between gap-5">
                <p className="font-normal text-sm">
                  Pay this payment bill before it is due,{" "}
                  <span className="text-red-600">on June 23, 2023.</span> If the
                  bill has not been paid by the specified time, it will be
                  forfeited
                </p>
              </div>
              <Link to="/ticketresult" className="w-full">
                <button className="w-full bg-[#E95102] text-white border-transparent hover:bg-orange-800 p-5 rounded-4xl">
                  Check Payment
                </button>
              </Link>
              <button
                className="w-full bg-[#E95102] text-white border-transparent hover:bg-orange-800 p-5 rounded-4xl"
                onClick={() => setIsModal(false)}
              >
                Pay Later
              </button>
            </div>
          </div>
        </div>
      )}
      <section className="w-ful flex justify-center items-center relative p-10">
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
          <form action="">
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
            <div className="p-5">
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
              <button
                className="w-full bg-[#E95102] text-white border-transparent hover:bg-orange-800 p-5 rounded-4xl"
                onClick={() => setIsModal(true)}
                type="button"
              >
                Pay your order
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}

export default PaymentCard;
