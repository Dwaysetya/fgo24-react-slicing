import Title from "../atoms/Title";
import Chip from "../atoms/Chip";

function FilmUpcoming({ film }) {
  return (
    <div className="relative rounded-2xl">
      <div className="w-[200px] h-[282px] flex gap-5 rounded-2xl">
        <img
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={film.title}
          className="rounded-2xl"
        />
      </div>

      <div className="left-0 w-full z-10 p-4 bg-opacity-60">
        <Title>{film.title.slice(0, 12) + "..."}</Title>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <Chip>{film.release_date}</Chip>
      </div>
    </div>
  );
}

export default FilmUpcoming;
