import { getMoviesUpcomming } from "../../services/apiClient";
import { useEffect, useState } from "react";

import FilmUpcoming from "../organisms/FilmUpcoming";

function FilmUpcomingList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(movies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentMovies = movies.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const result = await getMoviesUpcomming();
        console.log("Movies data:", result);
        setMovies(result || []);
      } catch (err) {
        console.log("Data tidak tersedia", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePrevious = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    handlePageChange(currentPage + 1);
  };

  const renderPaginationNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`
            w-12 h-12 rounded-full font-medium transition-all duration-200
            ${
              currentPage === i
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-orange-500/20 text-orange-500 hover:bg-orange-500 hover:text-white"
            }
          `}
          aria-label={`Go to page ${i}`}
          aria-current={currentPage === i ? "page" : undefined}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  if (loading) {
    return (
      <div className="w-full flex flex-col justify-center items-center gap-10 py-20">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
          <span className="ml-3 text-gray-600">Loading movies...</span>
        </div>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="w-full flex flex-col justify-center items-center gap-10 py-20">
        <div className="text-center">
          <p className="text-gray-600 text-lg">
            No upcoming movies available at the moment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 px-4">
      <div className="w-full">
        <div className="overflow-x-auto pb-4">
          <div className=" grid grid-cols-4 sm:flex w-auto lg:gap-8 mt-10 min-w-max px-0">
            {currentMovies.map((film) => (
              <div key={film.id} className="flex w-auto gap-0">
                <FilmUpcoming film={film} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`
              px-6 py-3 rounded-full font-medium transition-all duration-200
              ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl"
              }
            `}
            aria-label="Go to previous page"
          >
            Prev
          </button>
          <div className="flex items-center gap-2">
            {renderPaginationNumbers()}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`
              px-6 py-3 rounded-full font-medium transition-all duration-200
              ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl"
              }
            `}
            aria-label="Go to next page"
          >
            Next
          </button>
        </div>
      )}

      <div className="text-sm text-gray-500 text-center">
        Showing {startIndex + 1}-{Math.min(endIndex, movies.length)} of{" "}
        {movies.length} movies
      </div>
    </div>
  );
}

export default FilmUpcomingList;
