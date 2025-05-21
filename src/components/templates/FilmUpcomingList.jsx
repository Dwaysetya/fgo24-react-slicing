import { useEffect, useState } from "react";
import FilmUpcoming from "../organisms/FilmUpcoming";
import { getMovies } from "../../services/apiClient";

function FilmUpcomingList() {
  const [isMovies, setIsMovies] = useState([]);

  useEffect(() => {
    fetchMovie();
  }, []);
  const fetchMovie = async () => {
    try {
      const result = await getMovies();
      console.log("data", result);
      setIsMovies(result);
    } catch (error) {
      console.log("Gagal mengambil data", error);
    }
  };

  fetchMovie();
  return (
    <div className="flex h-auto overflow-x-auto gap-10">
      {isMovies.map((film) => (
        <FilmUpcoming key={film.id} film={film} />
      ))}
    </div>
  );
}
export default FilmUpcomingList;
