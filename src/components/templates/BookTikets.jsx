import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function BookTikets() {
  const [isMovie, setIsMovie] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

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
  return (
    <div className="flex w-full justify-between items-center">
      <div>
        <h1 className="font-semibold text-4xl">Book Tickets</h1>
      </div>
      {isMovie && (
        <Button
          variant="primary"
          className="hover:bg-orange-700"
          onClick={() => navigate(`/order/${isMovie.id}`)}
        >
          Book now
        </Button>
      )}
    </div>
  );
}

export default BookTikets;
