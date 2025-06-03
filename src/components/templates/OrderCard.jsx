// import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { setHistorytransaksi } from "../../redux/reducers/historyTransaksi";

import ebu from "../../assets/images/orderpage/ebu.svg";
import order from "../../assets/images/orderpage/order.svg";
import hiflix from "../../assets/images/orderpage/hiflix.svg";
import { getMoviesDetails } from "../../services/apiClient";

function OrderCard() {
  const [isGenre, setIsGenre] = useState([]);
  const [isMovie, setIsMovie] = useState();
  const [isSeat, setIsSeat] = useState([]);
  const transaksi = useSelector((state) => state.transaksi.historyTransaksi);
  const historyBook = useSelector((state) => state.transaksi.historyBook);
  const usedSeats = historyBook.flatMap((item) => item.seat);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const colsLeft = [1, 2, 3, 4, 5, 6, 7];
  const colsRight = [8, 9, 10, 11, 12, 13, 14];

  console.log(isSeat);
  console.log(transaksi, "trans");
  const cinema = [
    { id: "ebu", src: ebu },
    { id: "hiflix", src: hiflix },
    { id: "cineone", src: order },
  ];

  const display = cinema.find((item) => item.id === transaksi.cinema);

  const orderCinema = [
    {
      name: "Movie selected",
      value: isMovie?.title || "",
    },
    {
      name: transaksi.date,
      value: `${transaksi.time} pm`,
    },
    {
      name: "One ticket price",
      value: "$10",
    },
    {
      name: "Seat choosed",
      value: isSeat.join(","),
    },
  ];

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMoviesDetails(id);
        setIsMovie(response);
        setIsGenre(response.genres || []);
        console.log("daaaa", response);
      } catch (error) {
        console.log("Gagal mengambil data", error);
      }
    };

    if (id) fetchMovie();
  }, [id]);

  const renderGrid = (cols) => (
    <div className="grid grid-rows-7 grid-cols-7 gap-1">
      {rows.map((row) =>
        cols.map((col) => {
          const seatValue = `${row}${col}`;
          const isUsed = usedSeats.includes(seatValue);
          const isSelected = isSeat.includes(seatValue);
          console.log("isUsed:", isUsed, "seat:", seatValue);

          return (
            <div key={seatValue}>
              <input
                type="checkbox"
                value={seatValue}
                onChange={chooseSeat}
                disabled={isUsed}
                checked={isSelected}
                className={`
                  w-[26px] h-[26px] rounded cursor-pointer appearance-none border border-gray-300
                  ${isUsed ? "bg-[#6E7191] cursor-not-allowed" : ""}
                  ${
                    isSelected
                      ? "bg-blue-500"
                      : isUsed
                      ? "bg-[#6E7191]"
                      : "bg-gray-200"
                  }
                  hover:ring-2 hover:ring-offset-1 hover:ring-blue-300
                `}
              />
            </div>
          );
        })
      )}
    </div>
  );

  function chooseSeat(e) {
    if (isSeat.includes(e.target.value)) {
      const updateSeate = isSeat.filter((seat) => seat !== e.target.value);
      setIsSeat(updateSeate);
    } else {
      const containerSeat = e.target.value;
      setIsSeat([...isSeat, containerSeat]);
    }
  }

  function handleSubmit() {
    const genres = isGenre.map((item) => item.name);

    dispatch(
      setHistorytransaksi({
        resultSeat: isSeat.length * 10,
        seat: isSeat,
        genre: genres,
        title: isMovie.title,
        poster: isMovie.backdrop_path,
      })
    );
    navigate("/payment");
  }

  return (
    <main>
      {isMovie && (
        <section className="w-ful h-[1072px] flex justify-center items-center">
          <form className="w-[80%] h-[80%] flex justify-center gap-5">
            <div className="w-[70%] p-10 flex flex-col justify-center items-center shadow-2xl gap-10">
              <div className="w-full h-auto flex justify-center items-center p-2 gap-5 shadow-md">
                <div className="w-[50%] h-[117px] flex justify-center items-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${isMovie.backdrop_path}`}
                    alt="movie datails"
                  />
                </div>
                <div className="flex flex-col gap-5 w-full">
                  <div className="w-full h-[20px]">
                    <h1 className="font-semibold text-2xl">
                      {isMovie.title.slice(0, 20)}
                    </h1>
                  </div>
                  <div className="w-full h-[30px] mb-2">
                    <div className=" flex gap-10">
                      {isGenre.map((genre) => (
                        <h1 className="div-buttons-1">{genre.name}</h1>
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-[30px] justify-center items-center">
                    <p className="text-base font-normal">
                      Regular - {transaksi.time} PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <h1 className="font-bold text-2xl">Choose Your Seat</h1>
              </div>
              <div className="w-[50%] h-5 flex justify-center items-center bg-orange-500 rounded-tl-full rounded-tr-full">
                <p className="text-sm font-semibold text-white">Screen</p>
              </div>
              <div className="w-full">
                <div className="p-6">
                  <div className="flex justify-center">
                    <div className="flex flex-col justify-between mr-2 text-sm font-medium">
                      {rows.map((e) => (
                        <span
                          key={e}
                          className="h-[26px] leading-[26px] text-center"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                    <div>
                      <div className="flex gap-10">
                        {renderGrid(colsLeft)}
                        {renderGrid(colsRight)}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-10 mt-2 text-sm font-medium mr-12">
                    <div className="w-[26px]"></div>
                    <div className="grid grid-cols-7 gap-1">
                      {colsLeft.map((c) => (
                        <span key={c} className="w-[26px] text-center">
                          {c}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {colsRight.map((c) => (
                        <span key={c} className="w-[26px] text-center">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <h1 className="font-semibold text-lg">Seating key</h1>
              </div>
              <div className="w-full justify-center items-center flex gap-10">
                <h1 className="text-sm font-semibold">Available</h1>
                <div className="w-[26px] h-[26px] bg-[#1D4ED8]"></div>
                <h1 className="text-sm font-semibold">Selected</h1>
                <div className="w-[26px] h-[26px] bg-[#6E7191]"></div>
                <h1 className="text-sm font-semibold">Sold</h1>
              </div>
            </div>
            <div className="w-[30%] flex flex-col">
              <div className="flex justify-center items-center flex-col shadow-md gap-5">
                <div>
                  <img src={display?.src} alt="order" />
                </div>
                <div>
                  <h1>{display.id} Cinema</h1>
                </div>
                {orderCinema.map((item, index) => (
                  <div className="flex w-full justify-between p-5" key={index}>
                    <p className="text-sm">{item.name}</p>
                    <p className="font-semibold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between shadow-md p-5">
                <p className="text-lg font-semibold">Total Payment</p>
                <p className="text-[#E95102] font-bold text-2xl">
                  ${isSeat.length * 10}
                </p>
              </div>
              <div className="w-full flex justify-center items-centers mt-5">
                <button
                  className="bg-[#E95102] text-white border-transparent hover:bg-orange-800 w-full p-5"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Payment Now
                </button>
              </div>
            </div>
          </form>
        </section>
      )}
    </main>
  );
}

export default OrderCard;
