import { useState, useEffect } from "react";
import { getMovies } from "../../services/apiClient";
import FilmCard from "../organisms/FilmCard";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import { CiSearch } from "react-icons/ci";

const genreMap = {
  28: "Action",
  12: "Adventure",
  35: "Comedy",
  27: "Horror",
  53: "Thriller",
  878: "Sci-Fi",
};

function MovieCard() {
  const [isMovies, setIsMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const result = await getMovies();
      setIsMovies(result);
    } catch (error) {
      console.log("Gagal mengambil data", error);
    }
  };

  const filteredMovies = isMovies.filter((film) => {
    const matchGenre =
      activeGenre === null || film.genre_ids.includes(activeGenre);
    const matchSearch = film.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchGenre && matchSearch;
  });

  return (
    <div className="mt-10 flex flex-col gap-10">
      {/* Search */}
      <div className="flex justify-between f-full">
        <div className="flex flex-col gap-3 w-[40%] ">
          <Title>Find movie</Title>
          <div className="relative">
            <input
              id="search"
              type="text"
              placeholder="Search Your Movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>
        {/* Filters */}
        <div className="flex flex-col gap-3">
          <Title>Filters</Title>
          <div className="flex gap-4 flex-wrap">
            {Object.entries(genreMap).map(([id, name]) => (
              <Button
                key={id}
                variant={activeGenre === Number(id) ? "primary" : "secondary"}
                onClick={() =>
                  setActiveGenre(activeGenre === Number(id) ? null : Number(id))
                }
              >
                {name.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Movie List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((film) => <FilmCard key={film.id} film={film} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No movies found.
          </p>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
