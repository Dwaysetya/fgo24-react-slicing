import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import TicketCard from "../components/templates/TicketCard";

function TicketResult() {
  return (
    <main className="main-container">
      <header className="header-nav">
        <Navbar />
      </header>
      <section className="w-full">
        <TicketCard />
      </section>
      <footer className="footer-1 ">
        <Footer />
      </footer>
    </main>
  );
}

export default TicketResult;
