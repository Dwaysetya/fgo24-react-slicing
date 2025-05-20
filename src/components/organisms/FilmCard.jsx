import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Chip from "../atoms/Chip";
import Button from "../atoms/Button";
import { Link, useNavigate } from "react-router-dom";

function FilmCard({ film }) {
  const navigate = useNavigate();

  return (
    <div className="relative w-[296px] rounded-2xl overflow-hidden">
      <Chip
        className="w-[139px] h-[40px] flex bg-[#FDECE3] absolute top-0 rounded-br-2xl rounded-tl-2xl justify-center z-20"
        textClassName="text-base self-center text-orange-500"
      >
        Recomended
      </Chip>

      <div className="relative w-full h-auto group">
        <Image
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={film.title}
          className="w-full h-auto rounded-2xl object-cover"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 rounded-2xl">
          <div className="flex flex-col gap-4">
            <Button
              variant="primary"
              className="bg-transparent border-1"
              onClick={() => navigate(`/tickets/${film.id}`)}
            >
              <Link>VIEW DETAILS</Link>
            </Button>
            <Button variant="primary" className="bg-transparent border-1">
              <Link>BUY TICKET</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-3 z-20 p-4 bg-opacity-60">
        <Title>{film.title}</Title>
        <Text>{`⭐ ${film.vote_average.toFixed(1)}`}</Text>
      </div>

      <div className="flex gap-2 justify-center items-center mt-2 z-20">
        <Chip
          className="rounded-full bg-[#878786] py-[8px] px-[24px]"
          textClassName="text-black"
        >
          Action
        </Chip>
        <Chip
          className="rounded-full bg-[#878786] py-[8px] px-[24px]"
          textClassName="text-black"
        >
          Adventure
        </Chip>
      </div>
    </div>
  );
}

export default FilmCard;
