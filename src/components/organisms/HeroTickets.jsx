import { useParams } from "react-router-dom";
import { getMoviesDetails } from "../../services/apiClient";
import { useEffect, useState } from "react";

function HeroTickets() {
  const [isMovie, setIsMovie] = useState();
  const [isGenre, setIsGenre] = useState([]);
  const [isCredits, setIsCredits] = useState([]);
  const [isCast, setIsCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMoviesDetails(id);
        console.log("data", response);
        setIsMovie(response);
        setIsGenre(response.genres || []);
        setIsCredits(response.credits.crew);
        setIsCast(response.credits.cast);
        console.log("daaaa", response);
      } catch (error) {
        console.log("Gagal mengambil data", error);
      }
    };

    if (id) fetchMovie();
  }, [id]);

  const creditsJob = isCredits.filter((credit) => credit.job === "Director");
  const creditsCast = isCast.filter(
    (cast) => cast.known_for_department === "Acting"
  );
  console.log("cccc", creditsJob);

  return (
    <section className="w-full">
      {isMovie && (
        <>
          <div className="flex flex-col">
            <div
              className="w-full h-screen md:h-150 lg:h-120 bg-cover bg-center flex flex-col gap-5 relative rounded-[48px] md:rounded-[16px]"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${isMovie.backdrop_path})`,
              }}
            >
              <div className="w-full h-full bg-black/50 md:bg-black/70 bg-cover bg-center flex flex-col gap-5 absolute rounded-[48px] md:rounded-[16px]">
                <div className="hidden md:block">
                  <div className="w-[296px] h-[444px] md:mt-100 lg:mt-40 ml-20 absolute">
                    <img
                      className="rounded-[14px]"
                      src={`https://image.tmdb.org/t/p/w500${isMovie.poster_path}`}
                      alt="jumbo"
                    />
                  </div>
                  <div className="flex">
                    <div className="lg:w-[40%] 2xl:w-[30%]"></div>
                    <div className="mt-0 p-[40px] flex flex-col gap-5 justify-between lg:w-[50%] 2xl:w-[60%]">
                      <div className="flex-col gap-10">
                        <div className="w-full">
                          <h1 className="text-white font-semibold md:text-5xl 2xl:text-6xl">
                            {isMovie.title}
                          </h1>
                        </div>
                        <p className="text-lg font-light text-white mt-5">
                          {isMovie.overview.slice(0, 220)}
                        </p>
                      </div>
                      <div className="flex gap-5 flex-wrap">
                        {isGenre.map((genre) => (
                          <div key={genre.id} className="div-buttons">
                            {genre.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:hidden flex flex-col items-center justify-center h-full px-6 text-center">
                  <div className="w-[280px] h-[420px] mb-6">
                    <img
                      className="rounded-[12px] shadow-2xl"
                      src={`https://image.tmdb.org/t/p/w500${isMovie.poster_path}`}
                      alt="jumbo"
                    />
                  </div>
                  <div className="flex flex-col gap-4 max-w-sm">
                    <div className="w-full">
                      <h1 className="text-white font-bold text-3xl leading-tight">
                        {isMovie.title}
                      </h1>
                    </div>
                    <p className="text-sm font-light text-gray-200 leading-relaxed">
                      {isMovie.overview}
                    </p>
                    <div className="flex gap-2 flex-wrap justify-center mt-4">
                      {isGenre.map((genre) => (
                        <div
                          key={genre.id}
                          className="div-buttons text-xs px-3 py-1"
                        >
                          {genre.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="hidden md:block md:w-[70%] lg:w-[40%] 2xl:w-[30%]"></div>
              <div className="p-[20px] w-full flex gap-5 flex-col md:gap-6 md:w-[50%] lg:w-[50%] 2xl:w-[60%] md:flex-row">
                <div className="flex gap-10 flex-col w-full md:w-[50%]">
                  <div className="text-center md:text-left">
                    <h5 className="text-sm font-light text-gray-600">
                      Release Date
                    </h5>
                    <p className="font-semibold text-xl">
                      {isMovie.release_date}
                    </p>
                  </div>
                  <div className="text-center md:text-left">
                    <h5 className="text-sm font-light text-gray-600">
                      Duration
                    </h5>
                    <p className="font-semibold text-xl">
                      {Math.floor(isMovie.runtime / 60)} hours{" "}
                      {isMovie.runtime % 60} minutes
                    </p>
                  </div>
                </div>
                <div className="flex gap-10 flex-col w-full md:w-[50%]">
                  {creditsJob.map((data, index) => (
                    <div key={index} className="text-center md:text-left">
                      <h5 className="text-sm font-light text-gray-600">
                        Directed By
                      </h5>
                      <p className="font-semibold text-xl">{data.name}</p>
                    </div>
                  ))}
                  <div className="text-center md:text-left">
                    <h5 className="text-sm font-light text-gray-600">Cast</h5>
                    <div className="grid grid-rows-2 gap-1">
                      {creditsCast.slice(0, 4).map((e, index) => (
                        <p key={index} className="font-semibold text-xl">
                          {e.name}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default HeroTickets;
