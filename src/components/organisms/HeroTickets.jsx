import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { getMoviesDetails } from "../../services/apiClient";

function HeroTickets() {
  const [isMovie, setIsMovie] = React.useState();
  const [isGenre, setIsGenre] = React.useState([]);
  const [isCredits, setIsCredits] = React.useState([]);
  const [isCast, setIsCast] = React.useState([]);
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
          <div
            className="w-full h-120 bg-cover bg-center flex flex-col gap-5 relative rounded-[48px]"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280${isMovie.backdrop_path})`,
            }}
          >
            <div className="w-full h-120 bg-black/30 bg-cover bg-center flex flex-col gap-5 absolute rounded-[48px]">
              <div className="w-[296px] h-[444px] mt-40 ml-20 absolute">
                <img
                  className="rounded-[14px]"
                  src={`https://image.tmdb.org/t/p/w500${isMovie.poster_path}`}
                  alt="jumbo"
                />
              </div>
              <div className="flex">
                <div className="w-[30%]"></div>
                <div className="mt-[130px] p-[40px] flex flex-col gap-5 justify-between w-[60%]">
                  <div className="flex-col gap-10">
                    <div className="w-full">
                      <h1 className="text-white font-semibold text-6xl">
                        {isMovie.title.slice(0, 20)}
                      </h1>
                    </div>
                    <p className="text-lg font-light text-white mt-5">
                      {isMovie.overview}
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
          </div>
          <div className="flex">
            <div className="w-[30%]"></div>
            <div className="p-[20px] flex gap-5 w-[60%]">
              <div className="flex gap-10 flex-col w-[50%]">
                <div>
                  <h5 className="text-sm font-light">Release Date</h5>
                  <p className="font-semibold text-xl">
                    {isMovie.release_date}
                  </p>
                </div>
                <div>
                  <h5 className="text-sm font-light">Duration</h5>
                  <p className="font-semibold text-xl">
                    {Math.floor(isMovie.runtime / 60)} hours{" "}
                    {isMovie.runtime % 60} minutes
                  </p>
                </div>
              </div>
              <div className="flex gap-10 flex-col">
                {creditsJob.map((data) => (
                  <div>
                    <h5 className="text-sm font-light">Directed By</h5>
                    <p className="font-semibold text-xl">{data.name}</p>
                  </div>
                ))}
                <div>
                  <h5 className="text-sm font-light">Cast</h5>
                  <div className="grid grid-rows-2">
                    {creditsCast.splice(0, 4).map((e) => (
                      <p className="font-semibold text-xl">{e.name}</p>
                    ))}
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
