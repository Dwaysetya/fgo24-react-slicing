import { useState, useEffect } from "react";
import { getMovies } from "../../services/apiClient";
import FilmCard from "../organisms/FilmCard";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import { CiSearch } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";

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
  const [tempSearch, setTempSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("search") || "";
    setSearchQuery(query);
    setTempSearch(query);
    fetchMovie();
  }, [searchParams]);

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

  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  // Tambahkan fungsi sort berdasarkan pilihan user
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (selected === "alphabet") {
      return a.title.localeCompare(b.title);
    } else if (selected === "rating-high") {
      return b.vote_average - a.vote_average;
    } else if (selected === "rating-low") {
      return a.vote_average - b.vote_average;
    } else if (selected === "recommended") {
      return b.vote_average - a.vote_average;
    }
    return 0; // default: no sorting
  });

  return (
    <div className="mt-10 flex flex-col gap-10">
      {/* Search */}
      <div className="flex justify-between">
        <h1 className=" text-6xl font-semibold">Now Showing in Cinemas</h1>
        <div className="p-4">
          <select
            id="category"
            value={selected}
            onChange={handleChange}
            className="border border-gray-300 px-5 py-2 bg-[#E95102] text-white rounded-full"
          >
            <option value="">-- SORT BY --</option>
            <option value="alphabet">Alphabet (A-Z)</option>
            <option value="rating-high">Rating: Highest First</option>
            <option value="rating-low">Rating: Lowest First</option>
            <option value="recommended">Recommended</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between f-full">
        <div className="flex flex-col gap-3 w-[40%] ">
          <Title>Find movie</Title>
          <div className="relative">
            <input
              id="search"
              type="text"
              placeholder="Search Your Movies..."
              value={tempSearch}
              onChange={(e) => setTempSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearchQuery(tempSearch);
                  if (tempSearch.trim()) {
                    setSearchParams({ search: tempSearch });
                  } else {
                    searchParams.delete("search");
                    setSearchParams(searchParams);
                  }
                }
              }}
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
        {sortedMovies.length > 0 ? (
          sortedMovies.map((film) => <FilmCard key={film.id} film={film} />)
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
