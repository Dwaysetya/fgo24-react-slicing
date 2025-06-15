import Chip from "../components/atoms/Chip";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import FilmList from "../components/templates/FilmList";
import NavAction from "../components/molecules/NavAction";
import SupportList from "../components/templates/SupportList";
import CardSubscribe from "../components/organisms/CardSubscribe";
import FilmUpcomingList from "../components/templates/FilmUpcomingList";

const Home = () => {
  const navButtons = [
    {
      label: "VIEW ALL",
      to: "/movie",
      variant: "primary",
    },
  ];

  return (
    <main className="main-container ">
      <header className="header-nav">
        <Navbar />
      </header>
      <section className="flex bg-[#0D1A2F] flex-col items-center justify-center min-h-full py-[40px] px-5 sm:px-[80px] gap-[24px]">
        <Chip textClassName="font-black text-xs sm:text-md md:text-xl text-[#9599a2]">
          MOVIE TICKET PURCHASES #1 IN INDONESIA
        </Chip>
        <div className="flex flex-col">
          <h1 className="md:text-6xl text-md sm:text-2xl font-medium text-center ">
            Experience the Magic of Cinema:{" "}
            <span className="headline-4 text-[#b20f15] block">
              Book Your Tickets Today
            </span>{" "}
          </h1>
          <p className="mt-2 text-[#9599a2] text-md md:text-lg sm:text-2xl font-light text-center">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>
        <div className="bg-[#0D1A2F] flex flex-col mt-0 sm:mt-10">
          <div className="flex flex-row justify-center md:gap-10 lg:gap-90 py-10 sm:py-10 sm:p-5 ">
            <h2 className="font-semibold text-md sm:text-2xl md:text-4xl">
              Now Showing in Cinemas
            </h2>
          </div>
          <div className=" bg-[#0D1A2F] flex flex-col gap-5 justify-center items-center">
            <div className="bg-[#0D1A2F] flex flex-col gap-5 space-x-4 ">
              <FilmList />
            </div>
          </div>
          <div className="bg-[#0D1A2F] flex justify-center items-center sm:mt-20">
            <NavAction buttons={navButtons} />
          </div>
        </div>
      </section>
      <section className="bg-[#0D1A2F] flex h-auto">
        <div className=" bg-[#b20f15] w-full rounded-[48px] flex flex-col md:flex-row items-center justify-center min-h-full p-[60px] gap-[24px]">
          <div className="flex flex-col">
            <Chip className="flex w-full justify-center bg-[#0D1A2F] rounded-full py-[13px] md:px-[24px] mb-10 md:w-[216px]">
              WHY CHOOSE US
            </Chip>
            <h2 className="font-semibold md:text-6xl text-white text-center sm:text-left text-md sm:text-3xl">
              Unleashing the Ultimate Movie Experience
            </h2>
          </div>
          <div className="flex gap-[20px]">
            <SupportList />
          </div>
        </div>
      </section>
      <section className="bg-[#0D1A2F] flex flex-col-reverse md:flex-row min-h-full w-full p-[60px] md:gap-10">
        <div className="flex flex-col md:w-[70%]">
          <div className="h-[200%] flex gap-15">
            <FilmUpcomingList />
          </div>
        </div>
        <div className="flex w-full flex-col justify-center md:w-[30%]">
          <Chip className="flex w-full justify-center bg-[#b20f15] rounded-full py-[13px] px-[24px] mb-10 md:w-[216px]">
            UPCOMING MOVIES
          </Chip>
          <h2 className="font-semibold text-center mb-5 md:mb-0 md:text-left text-4xl md:text-6xl text-[#9599a2]">
            Exciting Movie Coming Soon
          </h2>
          <div className="flex md:mt-52 justify-center md:justify-between">
            <NavAction buttons={navButtons} />
          </div>
        </div>
      </section>
      <section className="bg-[#0D1A2F] flex h-auto w-full p-[60px]">
        <div className="bg-[#9599a2] flex flex-col w-full justify-center items-center py-[80px] px[244px] rounded-3xl gap-10 ">
          <h2 className="font-semibold text-md sm:text-3xl text-center md:text-left md:text-4xl lg:text-6xl text-[#b20f15]">
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
