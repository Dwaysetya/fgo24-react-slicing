import React, { useState } from "react";
import { ChevronDown, Eye, Edit, Trash2, Plus } from "lucide-react";

const AdminListCard = () => {
  const [selectedMonth, setSelectedMonth] = useState("November 2023");
  const [currentPage, setCurrentPage] = useState(1);

  const movies = [
    {
      id: 1,
      thumbnail: "/api/placeholder/40/60",
      title: "Spiderman HomeComing",
      category: "Action, Adventure",
      releaseDate: "07/05/2023",
      duration: "2 Hours 15 Minute",
    },
    {
      id: 2,
      thumbnail: "/api/placeholder/40/60",
      title: "Avengers End Game",
      category: "Sci-fi, Adventure",
      releaseDate: "10/06/2023",
      duration: "2 Hours 15 Minute",
    },
    {
      id: 3,
      thumbnail: "/api/placeholder/40/60",
      title: "Spiderman HomeComing",
      category: "Action, Adventure",
      releaseDate: "02/03/2023",
      duration: "2 Hours 15 Minute",
    },
    {
      id: 4,
      thumbnail: "/api/placeholder/40/60",
      title: "Avengers End Game",
      category: "Sci-fi, Adventure",
      releaseDate: "01/09/2023",
      duration: "2 Hours 15 Minute",
    },
    {
      id: 5,
      thumbnail: "/api/placeholder/40/60",
      title: "Spiderman HomeComing",
      category: "Action, Adventure",
      releaseDate: "07/08/2023",
      duration: "2 Hours 15 Minute",
    },
  ];

  const ActionButton = ({ icon: Icon, bgColor, onClick }) => (
    <button
      onClick={onClick}
      className={`p-2 ${bgColor} text-white rounded hover:opacity-80 transition-opacity`}
    >
      <Icon size={16} />
    </button>
  );

  return (
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

          {/* Add Movies Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center">
            <Plus size={16} />
            Add Movies
          </button>
        </div>
      </div>

      {/* Table Container */}
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
          <tbody className="bg-white divide-y divide-gray-200">
            {movies.map((movie, index) => (
              <tr key={movie.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {index + 1}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="w-10 h-14 bg-gray-200 rounded flex items-center justify-center">
                    <div className="w-8 h-12 bg-gradient-to-br from-blue-400 to-red-400 rounded"></div>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                    {movie.title}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {movie.category}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {movie.releaseDate}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {movie.duration}
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
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <div className="flex space-x-1">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 text-sm rounded ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Card View (Hidden on larger screens) */}
      <div className="block sm:hidden mt-4">
        <div className="space-y-4">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
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
                  <p className="text-xs text-gray-500 mt-1">{movie.category}</p>
                  <p className="text-xs text-gray-500">{movie.releaseDate}</p>
                  <p className="text-xs text-gray-500">{movie.duration}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminListCard;
