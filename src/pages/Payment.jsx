import React from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import PaymentCard from "../components/templates/PaymentCard";

function Payment() {
  return (
    <main className="main-container">
      <header className="header-nav">
        <Navbar />
      </header>
      <section className="w-full">
        <PaymentCard />
      </section>
      <footer className="footer-1">
        <Footer />
      </footer>
    </main>
  );
}

export default Payment;
