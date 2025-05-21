import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import OrderCard from "../components/templates/OrderCard";

function OrderPage() {
  return (
    <main className="main-container">
      <header className="header-nav">
        <Navbar />
      </header>
      <section>
        <OrderCard />
      </section>
      <footer className="footer-1">
        <Footer />
      </footer>
    </main>
  );
}

export default OrderPage;
