import Navbar from "../components/organisms/Navbar";
import HeroSection from "../components/organisms/HeroSection";
import CardSubscribe from "../components/organisms/CardSubscribe";
import Footer from "../components/organisms/Footer";
import MovieCard from "../components/templates/MovieCard";

function Movie() {
  return (
    <main className="main-container">
      <header className="header-nav">
        <Navbar />
      </header>
      <section className="section-1">
        <HeroSection />
      </section>
      <section className="section-1">
        <MovieCard />
      </section>
      <section className="flex h-auto w-full p-[60px]">
        <div className="bg-[#FDECE3] flex flex-col w-full justify-center items-center py-[80px] px[244px] rounded-3xl gap-10 ">
          <h2 className="font-semibold text-md sm:text-3xl text-center md:text-left md:text-4xl lg:text-6xl text-black">
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
}

export default Movie;
