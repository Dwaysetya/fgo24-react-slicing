import NavbarAdmin from "../components/organisms/NavbarAdmin";
import AddMovieCard from "../components/templates/AddMovieCard";

function AddNewMovie() {
  return (
    <main className="main-container">
      <header className="header-nav">
        <NavbarAdmin />
      </header>
      <section className="w-full p-20">
        <AddMovieCard />
      </section>
    </main>
  );
}

export default AddNewMovie;
