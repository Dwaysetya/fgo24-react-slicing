import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import SelectTikets from "./SelectTikets";
import CustomCheckbox from "./CustomCheckbox";
import { setHistorytransaksi } from "../../redux/reducers/historyTransaksi";

function BookTikets() {
  const [isMovie, setIsMovie] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);
  // const book = useSelector((state) => state.transaksi.hostoryTransaksi);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
    cinema: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjFhZmNlMThmOTVlNDNhODYzNzcwZjRmNzU3N2NlYSIsIm5iZiI6MTc0NzQyMTY2My45ODIsInN1YiI6IjY4Mjc4OWRmYmY0NWFiNTM1MjNkZDM2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B3xquaTWkKxdQBeHsdUUfT-uv9FaZrYjKzkm19U_v6E",
            },
          }
        );
        const result = await response.json();
        console.log("data", result);
        setIsMovie(result);
      } catch (error) {
        console.log("Gagal mengambil data", error);
      }
    };

    if (id) fetchMovie();
  }, [id]);
  const handleBookNow = () => {
    if (!currentUser) {
      Swal.fire({
        icon: "warning",
        title: "Belum login ya...",
        text: "Anda harus login terlebih dahulu untuk memesan tiket.",
      });
      return;
    }

    // Validasi semua field harus terisi
    const { date, time, location, cinema } = formData;
    if (!date || !time || !location || !cinema) {
      Swal.fire({
        icon: "error",
        title: "Form belum lengkap",
        text: "Silakan lengkapi semua data terlebih dahulu.",
      });
      return;
    }

    dispatch(setHistorytransaksi({ id: currentUser.id, ...formData }));
    navigate(`/order/${isMovie.id}`);
  };

  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex sm:flex-row flex-col gap-2 w-full justify-between items-center">
        <h1 className="font-semibold text-4xl">Book Tickets</h1>
        {isMovie && (
          <Button
            variant="primary"
            className="hover:bg-orange-700"
            onClick={handleBookNow}
          >
            Book now
          </Button>
        )}
      </div>
      {/* Ini bagian SelectTikets */}
      <SelectTikets formData={formData} onChange={handleChange} />
      <CustomCheckbox
        selectedCinema={formData.cinema}
        onSelectCinema={(cinemaId) => handleChange("cinema", cinemaId)}
      />
    </div>
  );
}

export default BookTikets;
