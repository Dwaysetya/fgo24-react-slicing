import Navbar from "../components/organisms/Navbar";
import HeroSection from "../components/organisms/HeroSection";
import SelectOption from "../components/templates/SelectOption";
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
        <div className="flex flex-col w-full px-[50px] justify-between gap-10">
          <div className="flex justify-between">
            <h1 className=" text-6xl font-semibold">Now Showing in Cinemas</h1>
            <SelectOption />
          </div>
        </div>
      </section>
      <section className="section-1">
        <MovieCard />
      </section>
      <section className="flex min-h-full w-full p-[60px]">
        <div className="bg-[#FDECE3] flex flex-col w-full justify-center items-center py-[80px] px[244px] rounded-3xl gap-10 ">
          <h2 className="font-semibold text-6xl text-black">
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
