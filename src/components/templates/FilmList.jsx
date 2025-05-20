import FilmCard from "../organisms/FilmCard";
import { getMovies } from "../../services/apiClient";
import { useState, useEffect } from "react";

function FilmList() {
  const [isMovies, setIsMovies] = useState([]);

  useEffect(() => {
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

    fetchMovie();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] mt-10 overflow-x-auto">
      {isMovies.map((film) => (
        <div className="flex gap-5 ">
          <FilmCard key={film.id} film={film} />
        </div>
      ))}
    </div>
  );
}
export default FilmList;
