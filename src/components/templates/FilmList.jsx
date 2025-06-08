import { getMovies } from "../../services/apiClient";
import { useState, useEffect } from "react";

import FilmCard from "../organisms/FilmCard";
import Button from "../atoms/Button";

function FilmList() {
  const [isMovies, setIsMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const LIMIT = 4;
  const OFFSET = (page - 1) * LIMIT;
  const TOTAL = Math.ceil(isMovies.length / LIMIT);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      setLoading(true);
      const result = await getMovies();
      console.log("data", result);
      setIsMovies(result || []);
      console.log("daaaa", result);
    } catch (error) {
      console.log("Gagal mengambil data", error);
      setIsMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[375px] sm:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] mx-auto px-4">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">Loading...</div>
        </div>
      ) : (
        <>
          <div className="mb-8">
            {/* Mobile layout */}
            <div className="flex overflow-x-auto gap-4 pb-4 sm:hidden">
              {isMovies
                .sort((a, b) => b.vote_average - a.vote_average)
                .slice(OFFSET, OFFSET + LIMIT)
                .map((film) => (
                  <div key={film.id} className="flex-shrink-0 w-48">
                    <FilmCard film={film} />
                  </div>
                ))}
            </div>

            {/* Desktop layout */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {isMovies
                .sort((a, b) => b.vote_average - a.vote_average)
                .slice(OFFSET, OFFSET + LIMIT)
                .map((film) => (
                  <div key={film.id}>
                    <FilmCard film={film} />
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 py-10 sm:py-6">
            <Button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="button-hover px-3 py-2 text-sm"
            >
              Prev
            </Button>

            <div className="flex flex-wrap gap-1 mx-2">
              {Array.from({ length: TOTAL }).map((_, index) => (
                <Button
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={`px-3 py-2 text-sm ${
                    page === index + 1 ? "active" : ""
                  }`}
                >
                  {index + 1}
                </Button>
              ))}
            </div>

            <Button
              onClick={() => setPage(page + 1)}
              disabled={page * LIMIT >= isMovies.length}
              className="button-hover px-3 py-2 text-sm"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default FilmList;
