import Navbar from "../components/organisms/Navbar";
import HeroTickets from "../components/organisms/HeroTickets";
import BookTikets from "../components/templates/BookTikets";
import ChooseCinema from "../components/templates/ChooseCinema";
import Footer from "../components/organisms/Footer";

function Tickets() {
  return (
    <main className="main-container">
      <header className="header-nav">
        <Navbar />
      </header>
      <section className="relative">
        <HeroTickets />
      </section>
      <section className="w-full bg-[#F8F8F8] rounded-tl-[48px] p-[80px] rounded-tr-[48px]">
        <div>
          <BookTikets />
        </div>
        <div className="mt-10">
          <ChooseCinema />
        </div>
      </section>
      <footer className="footer-1">
        <Footer />
      </footer>
    </main>
  );
}

export default Tickets;
