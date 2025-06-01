import React from "react";
import Navbar from "../components/organisms/Navbar";
import Chip from "../components/atoms/Chip";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import FilmList from "../components/templates/FilmList";
import NavAction from "../components/molecules/NavAction";
import SupportList from "../components/templates/SupportList";
import FilmUpcomingList from "../components/templates/FilmUpcomingList";
import ButtonUpcoming from "../components/organisms/ButtonUpcoming";
import CardSubscribe from "../components/organisms/CardSubscribe";
import Footer from "../components/organisms/Footer";

const Home = () => {
  const navButtons = [
    {
      label: "VIEW ALL",
      to: "/movie",
      variant: "primary",
    },
  ];

  return (
    <main className="main-container">
      {/* Header section (Navbar) */}
      <header className="header-nav">
        <Navbar />
      </header>
      {/* Hero or content section */}
      <section className="flex flex-col items-center justify-center min-h-full py-[40px] px-[80px] gap-[24px]">
        <Chip textClassName="font-black text-xl text-orange-500">
          MOVIE TICKET PURCHASES #1 IN INDONESIA
        </Chip>
        <div className="flex flex-col">
          <h1 className="text-6xl font-medium text-center">
            Experience the Magic of Cinema:{" "}
            <span className="headline-4 text-orange-500 block">
              Book Your Tickets Today
            </span>{" "}
          </h1>
          <p className="mt-2 text-[#333333] text-lg font-light text-center">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>
        <div className="flex flex-col mt-20">
          <div className="flex flex-row justify-between gap-90">
            <FaArrowAltCircleLeft size={50} className="arrow" />
            <h2 className="font-semibold text-4xl">Now Showing in Cinemas</h2>
            <FaArrowAltCircleRight size={50} className="arrow" />
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="flex flex-col gap-5 space-x-4">
              <FilmList />
            </div>
          </div>
          <div className="flex justify-center items-center mt-20">
            <NavAction buttons={navButtons} />
          </div>
        </div>
      </section>
      <section className="flex min-h-full">
        <div className=" bg-[#0F100D] w-full rounded-[48px] flex flex-row items-center justify-center min-h-full p-[60px] gap-[24px]">
          <div className="flex flex-col">
            <Chip className="flex bg-[#FDECE3] rounded-full py-[13px] px-[24px] mb-10 w-[216px]">
              WHY CHOOSE US
            </Chip>
            <h2 className="font-semibold text-6xl text-white">
              Unleashing the Ultimate Movie Experience
            </h2>
          </div>
          <div className="flex gap-[20px]">
            <SupportList />
          </div>
        </div>
      </section>
      <section className="flex min-h-full w-full p-[60px] gap-10">
        <div className="flex flex-col w-[70%]">
          <div className="h-[200%] flex gap-15">
            <FilmUpcomingList />
          </div>
        </div>
        <div className="flex flex-col w-[30%]">
          <Chip className="flex bg-[#FDECE3] rounded-full py-[13px] px-[24px] mb-10 w-[216px]">
            UPCOMING MOVIES
          </Chip>
          <h2 className="font-semibold text-6xl text-black">
            Exciting Movie Coming Soon
          </h2>
          <div className="flex mt-52 justify-between">
            <NavAction buttons={navButtons} />
          </div>
        </div>
      </section>
      <section className="flex min-h-full w-full p-[60px]">
        <div className="bg-[#FDECE3] flex flex-col w-full justify-center items-center py-[80px] px[244px] rounded-3xl gap-10 ">
          <h2 className="font-semibold text-6xl text-black">
            Subscribe to Our Newsletter
          </h2>
          <div>
            <CardSubscribe />
          </div>
        </div>
      </section>
      <footer className="footer-1">
        <Footer />
      </footer>
    </main>
  );
};

export default Home;
