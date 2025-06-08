import { useEffect, useState } from "react";
import NavbarAdmin from "../components/organisms/NavbarAdmin";
import AdminListCard from "../components/templates/AdminListCard";
import { getMovies } from "../services/apiClient";

function AdminList() {
  const [isMovie, setIsMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMovies();
        setIsMovie(result);
      } catch (error) {
        console.log("Gagal mengambil data", error);
      }
    };
    fetchMovie();
  }, []);
  return (
    <main className="main-container">
      <header className="header-nav">
        <NavbarAdmin />
      </header>
      <section className="w-full p-20">
        <AdminListCard film={isMovie} />
      </section>
    </main>
  );
}

export default AdminList;
