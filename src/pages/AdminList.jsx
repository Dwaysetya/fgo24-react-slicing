import Navbar from "../components/organisms/Navbar";
import AdminListCard from "../components/templates/AdminListCard";

function AdminList() {
  return (
    <main className="main-container">
      <header className="header-nav">
        <Navbar />
      </header>
      <section className="w-full p-20">
        <AdminListCard />
      </section>
    </main>
  );
}

export default AdminList;
