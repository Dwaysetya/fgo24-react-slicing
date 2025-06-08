import React, { useState } from "react";
import { Search, ChevronDown, User, Plus, X, Calendar } from "lucide-react";

function AddMovieCard() {
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

  const [newTimeInput, setNewTimeInput] = useState("");

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="px-6 py-3 text-gray-500 text-sm">
        New - Add New Movie / Dekstop
      </div>

      {/* Main Content */}
      <div className="px-6 py-8 flex justify-center">
        <div className="max-w-2xl w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Add New Movie
          </h2>

          <div className="space-y-6">
            {/* Upload Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Image
              </label>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Upload
              </button>
            </div>

            {/* Movie Name */}
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

            {/* Category */}
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

            {/* Release Date and Duration */}
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

            {/* Director Name */}
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

            {/* Cast */}
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

            {/* Synopsis */}
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

            {/* Add Location */}
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

            {/* Set Date & Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Set Date & Time
              </label>

              {/* Date Input */}
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

              {/* Time Input Section */}
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

                {/* Show Times List */}
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

            {/* Save Button */}
            <div className="pt-6">
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
                Save Movie
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMovieCard;
