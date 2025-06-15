import { CiSearch } from "react-icons/ci";
import { getMovies } from "../../services/apiClient";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Title from "../atoms/Title";
import Button from "../atoms/Button";
import FilmCard from "../organisms/FilmCard";

const genreMap = {
  28: "Action",
  12: "Adventure",
  35: "Comedy",
  27: "Horror",
  53: "Thriller",
  878: "Sci-Fi",
};

function MovieCard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeGenre, setActiveGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [tempSearch, setTempSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [isMovies, setIsMovies] = useState([]);

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

  const handleChange = (e) => {
    setSelected(e.target.value);
  };
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
    return 0;
  });

  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 items-start sm:items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
          Now Showing
          <br className="sm:hidden" />
          in Cinemas
        </h1>
        <div className="p-0 sm:p-4">
          <select
            id="category"
            value={selected}
            onChange={handleChange}
            className="border-0 sm:border sm:border-gray-300 px-4 sm:px-4 md:px-5 py-3 sm:py-2 bg-[#b20f15] text-white rounded-full text-sm sm:text-base w-auto font-medium min-w-[140px]"
          >
            <option value="">POPULAR</option>
            <option value="alphabet">Alphabet (A-Z)</option>
            <option value="rating-high">Rating: Highest First</option>
            <option value="rating-low">Rating: Lowest First</option>
            <option value="recommended">Recommended</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:hidden">
        <h2 className="text-lg font-medium">Find movie</h2>
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
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
          />
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:hidden">
        <h2 className="text-lg font-medium">Filters</h2>
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(genreMap).map(([id, name]) => (
            <Button
              key={id}
              variant={activeGenre === Number(id) ? "primary" : "secondary"}
              onClick={() =>
                setActiveGenre(activeGenre === Number(id) ? null : Number(id))
              }
              className="py-3 px-4 text-sm font-medium rounded-full border-2 border-gray-300 bg-white text-black hover:bg-gray-50"
            >
              {name.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-between gap-4">
        <div className="flex flex-col gap-3 w-[40%]">
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

        <div className="flex flex-col gap-3">
          <Title>Filters</Title>
          <div className="flex gap-2 flex-wrap">
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
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[32px]">
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
