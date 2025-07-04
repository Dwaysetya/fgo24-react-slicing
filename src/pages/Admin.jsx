import AdminPage from "../components/templates/AdminPage";
import NavbarAdmin from "../components/organisms/NavbarAdmin";

function Admin() {
  return (
    <main className="main-container">
      <header className="header-nav">
        <NavbarAdmin />
      </header>
      <section className="w-full p-20">
        <AdminPage />
      </section>
    </main>
  );
}

export default Admin;
