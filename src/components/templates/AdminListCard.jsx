import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { getMovies, getMoviesDetails } from "../../services/apiClient";
import { ChevronDown, Eye, Edit, Trash2, Plus } from "lucide-react";

import Button from "../atoms/Button";

const AdminListCard = ({ film }) => {
  const [selectedMonth, setSelectedMonth] = useState("November 2023");
  const [newTimeInput, setNewTimeInput] = useState("");
  const [isAddMovie, setIsAddMovie] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [movieCard, setMovieCard] = useState([]);
  const [isGenre, setIsGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    movieName: "Spider-Man: Homecoming",
    category: "Action, Adventure, Sci-Fi",
    releaseDate: "07/05/2020",
    durationHour: "2",
    durationMinute: "13",
    directorName: "Jon Watts",
    cast: "Tom Holland, Michael Keaton, Robert Dow..",
    synopsis:
      "Thrilled by his experience with the Avengers, Peter returns home,\nwhere he\nlives with his Aunt May.",
    location: "Purwokerto, Bandung, Bekasi",
    showDate: "",
    showTimes: ["08:30", "22:30"],
  });

  const LIMIT = 5;
  const OFFSET = (page - 1) * LIMIT;
  const TOTAL = Math.ceil(movieCard.length / LIMIT);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMoviesDetails(film.id);
        console.log("admin result", result);
        setIsGenre(result);
      } catch (error) {
        console.log("Gagal mengirim data", error);
      }
    };
    fetchMovie();
  }, [film.id]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await getMovies();
        setMovieCard(result);
      } catch (error) {
        console.log("Gagal mengambil data", error);
      }
    };
    fetchMovies();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addShowTime = () => {
    if (newTimeInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        showTimes: [...prev.showTimes, newTimeInput.trim()],
      }));
      setNewTimeInput("");
    }
  };

  const removeShowTime = (index) => {
    setFormData((prev) => ({
      ...prev,
      showTimes: prev.showTimes.filter((_, i) => i !== index),
    }));
  };

  const genres = Array.isArray(isGenre.genres)
    ? isGenre.genres.map((g) => g.name).join(", ")
    : "";

  const ActionButton = ({ icon: Icon, bgColor, onClick }) => (
    <button
      onClick={onClick}
      className={`p-2 ${bgColor} text-white rounded hover:opacity-80 transition-opacity`}
    >
      <Icon size={16} />
    </button>
  );

  function handleClick() {
    setIsActive(false);
    setIsAddMovie(true);
  }

  return isActive ? (
    <div className="w-full max-w-6xl mx-auto p-4 bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-xl font-semibold text-gray-800">List Movie</h1>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-40"
            >
              <option>November 2023</option>
              <option>December 2023</option>
              <option>January 2024</option>
            </select>
            <ChevronDown
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
          </div>

          <button
            onClick={handleClick}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center"
          >
            <Plus size={16} />
            Add Movies
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                No
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20">
                Thumbnail
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Movie Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Released Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                Action
              </th>
            </tr>
          </thead>
          {movieCard.slice(OFFSET, OFFSET + LIMIT).map((movie, index) => (
            <tbody className="bg-white divide-y divide-gray-200">
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {index + 1}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="w-10 h-14 bg-gray-200 rounded flex items-center justify-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-10 h-14 object-cover rounded"
                    />
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                    {movie.title}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {genres}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {movie.release_date}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {Math.floor(movie.runtime / 60)} hours {movie.runtime % 60}{" "}
                  minutes
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <ActionButton
                      icon={Eye}
                      bgColor="bg-blue-500"
                      onClick={() => console.log("View", movie.id)}
                    />
                    <ActionButton
                      icon={Edit}
                      bgColor="bg-purple-500"
                      onClick={() => console.log("Edit", movie.id)}
                    />
                    <ActionButton
                      icon={Trash2}
                      bgColor="bg-red-500"
                      onClick={() => console.log("Delete", movie.id)}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
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
          disabled={page * LIMIT >= movieCard.length}
          className="button-hover px-3 py-2 text-sm"
        >
          Next
        </Button>
      </div>
      {movieCard.slice(OFFSET, OFFSET + LIMIT).map((movie, index) => (
        <div className="block sm:hidden mt-4">
          <div className="space-y-4">
            <div
              key={index}
              className="bg-white border rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-start space-x-3">
                <div className="w-12 h-16 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                  <div className="w-10 h-14 bg-gradient-to-br from-blue-400 to-red-400 rounded"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-blue-600 truncate">
                    {movie.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{genres}</p>
                  <p className="text-xs text-gray-500">{movie.release_date}</p>
                  <p className="text-xs text-gray-500">
                    {Math.floor(movie.runtime / 60)} hours {movie.runtime % 60}{" "}
                    minutes
                  </p>
                  <div className="flex space-x-2 mt-3">
                    <ActionButton
                      icon={Eye}
                      bgColor="bg-blue-500"
                      onClick={() => console.log("View", movie.id)}
                    />
                    <ActionButton
                      icon={Edit}
                      bgColor="bg-purple-500"
                      onClick={() => console.log("Edit", movie.id)}
                    />
                    <ActionButton
                      icon={Trash2}
                      bgColor="bg-red-500"
                      onClick={() => console.log("Delete", movie.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : isAddMovie ? (
    <div className="min-h-screen flex justify-center w-full">
      <div className="px-6 py-8 flex justify-center w-[50%] shadow-2xl">
        <div className="max-w-2xl w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Add New Movie
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Image
              </label>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Upload
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Movie Name
              </label>
              <input
                type="text"
                value={formData.movieName}
                onChange={(e) => handleInputChange("movieName", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Release date
                </label>
                <input
                  type="text"
                  value={formData.releaseDate}
                  onChange={(e) =>
                    handleInputChange("releaseDate", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (hour / minute)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    min="0"
                    value={formData.durationHour}
                    onChange={(e) =>
                      handleInputChange("durationHour", e.target.value)
                    }
                    className="w-16 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
                  />
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={formData.durationMinute}
                    onChange={(e) =>
                      handleInputChange("durationMinute", e.target.value)
                    }
                    className="w-16 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Director Name
              </label>
              <input
                type="text"
                value={formData.directorName}
                onChange={(e) =>
                  handleInputChange("directorName", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cast
              </label>
              <input
                type="text"
                value={formData.cast}
                onChange={(e) => handleInputChange("cast", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Synopsis
              </label>
              <textarea
                value={formData.synopsis}
                onChange={(e) => handleInputChange("synopsis", e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Add Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Set Date & Time
              </label>
              <div className="mb-4">
                <input
                  type="date"
                  value={formData.showDate}
                  onChange={(e) =>
                    handleInputChange("showDate", e.target.value)
                  }
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="time"
                    value={newTimeInput}
                    onChange={(e) => setNewTimeInput(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Add time"
                  />
                  <button
                    onClick={addShowTime}
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.showTimes.map((time, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1 px-3 py-2 bg-gray-100 rounded-md text-gray-700"
                    >
                      <span>{time}</span>
                      <button
                        onClick={() => removeShowTime(index)}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-6">
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
                Save Movie
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default AdminListCard;
