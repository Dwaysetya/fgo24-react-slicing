import FilmCard from "../organisms/FilmCard";
import { getMovies } from "../../services/apiClient";
import { useState, useEffect } from "react";

function FilmList() {
  const [isMovies, setIsMovies] = useState([]);

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] mt-10">
      {isMovies.splice(0, 4).map((film) => (
        <div key={film.id}>
          <FilmCard film={film} />
        </div>
      ))}
    </div>
  );
}
export default FilmList;
