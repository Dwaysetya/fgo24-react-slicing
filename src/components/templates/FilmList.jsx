import FilmCard from "../organisms/FilmCard";
import { getMovies } from "../../services/apiClient";
import { useState, useEffect } from "react";
import Button from "../atoms/Button";

function FilmList() {
  const [isMovies, setIsMovies] = useState([]);
  const [page, setPage] = useState(1);
  const LIMIT = 4;
  const OFFSET = (page - 1) * LIMIT;
  const TOTAL = Math.ceil(isMovies.length / LIMIT);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const result = await getMovies();
      console.log("data", result);
      setIsMovies(result);
      console.log("daaaa", result);
    } catch (error) {
      console.log("Gagal mengambil data", error);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] mt-10">
        {isMovies.slice(OFFSET, LIMIT * page).map((film) => (
          <div key={film.id}>
            <FilmCard film={film} />
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-center gap-5">
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="button-hover"
        >
          Prev
        </Button>
        {Array.from({ length: TOTAL }).map((_, index) => (
          <Button
            disabled={page === index + 1}
            className="button-hover"
            onClick={() => setPage(page + 1)}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page * LIMIT >= isMovies.length}
          className="button-hover"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
export default FilmList;
