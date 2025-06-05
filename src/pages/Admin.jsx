import React from "react";
import AdminPage from "../components/templates/AdminPage";
import Navbar from "../components/organisms/Navbar";

function Admin() {
  return (
    <main className="main-container">
      <header className="header-nav">
        <Navbar />
      </header>
      <section className="w-full p-20">
        <AdminPage />
      </section>
    </main>
  );
}

export default Admin;
