import { getMoviesDetails } from "../../services/apiClient";
import { useEffect, useState } from "react";
import { setHistorytransaksi } from "../../redux/reducers/historyTransaksi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ebu from "../../assets/images/orderpage/ebu.svg";
import order from "../../assets/images/orderpage/order.svg";
import hiflix from "../../assets/images/orderpage/hiflix.svg";

function OrderCard() {
  const transaksi = useSelector((state) => state.transaksi.historyTransaksi);
  const historyBook = useSelector((state) => state.transaksi.historyBook);
  const usedSeats = historyBook.flatMap((item) => item.seat);

  const [isGenre, setIsGenre] = useState([]);
  const [isMovie, setIsMovie] = useState();
  const [isSeat, setIsSeat] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

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
                  w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px] 
                  rounded cursor-pointer appearance-none border border-gray-300
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
    <main className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8">
      {isMovie && (
        <section className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <form className="w-full max-w-7xl flex flex-col lg:flex-row justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="w-full lg:w-[70%] p-4 sm:p-6 lg:p-10 flex flex-col justify-center items-center bg-white shadow-2xl rounded-lg gap-6 sm:gap-8 lg:gap-10">
              <div className="w-full h-auto flex flex-col sm:flex-row justify-center items-center p-4 gap-4 sm:gap-5 shadow-md rounded-lg">
                <div className="w-full sm:w-[50%] md:w-[40%] lg:w-[30%] h-auto flex justify-center items-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${isMovie.backdrop_path}`}
                    alt="movie details"
                    className="w-full h-auto max-h-[120px] sm:max-h-[140px] lg:max-h-[117px] object-cover rounded"
                  />
                </div>
                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 w-full text-center sm:text-left">
                  <div className="w-full">
                    <h1 className="font-semibold text-lg sm:text-xl lg:text-2xl">
                      {isMovie.title.slice(0, 20)}
                    </h1>
                  </div>
                  <div className="w-full mb-2">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 lg:gap-10">
                      {isGenre.map((genre) => (
                        <h1
                          key={genre.id}
                          className="div-buttons-1 text-xs sm:text-sm"
                        >
                          {genre.name}
                        </h1>
                      ))}
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm sm:text-base font-normal">
                      Regular - {transaksi.time} PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full text-center lg:text-left">
                <h1 className="font-bold text-xl sm:text-2xl">
                  Choose Your Seat
                </h1>
              </div>
              <div className="w-[60%] sm:w-[50%] lg:w-[40%] h-4 sm:h-5 flex justify-center items-center bg-orange-500 rounded-tl-full rounded-tr-full">
                <p className="text-xs sm:text-sm font-semibold text-white">
                  Screen
                </p>
              </div>
              <div className="w-full overflow-x-auto">
                <div className="p-2 sm:p-4 lg:p-6 min-w-[500px] sm:min-w-[600px] lg:min-w-0">
                  <div className="flex justify-center">
                    <div className="flex flex-col justify-between mr-2 text-xs sm:text-sm font-medium">
                      {rows.map((e) => (
                        <span
                          key={e}
                          className="h-[20px] sm:h-[22px] md:h-[24px] lg:h-[26px] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px] text-center"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                    <div>
                      <div className="flex gap-4 sm:gap-6 lg:gap-10">
                        {renderGrid(colsLeft)}
                        {renderGrid(colsRight)}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 sm:gap-6 lg:gap-10 mt-2 text-xs sm:text-sm font-medium mr-6 sm:mr-8 lg:mr-12">
                    <div className="w-[20px] sm:w-[22px] md:w-[24px] lg:w-[26px]"></div>
                    <div className="grid grid-cols-7 gap-1">
                      {colsLeft.map((c) => (
                        <span
                          key={c}
                          className="w-[20px] sm:w-[22px] md:w-[24px] lg:w-[26px] text-center"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {colsRight.map((c) => (
                        <span
                          key={c}
                          className="w-[20px] sm:w-[22px] md:w-[24px] lg:w-[26px] text-center"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full text-center lg:text-left">
                <h1 className="font-semibold text-base sm:text-lg">
                  Seating key
                </h1>
              </div>
              <div className="w-full justify-center lg:justify-start items-center flex flex-wrap gap-4 sm:gap-6 lg:gap-10">
                <div className="flex items-center gap-2">
                  <div className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[26px] lg:h-[26px] bg-gray-200"></div>
                  <h1 className="text-xs sm:text-sm font-semibold">
                    Available
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[26px] lg:h-[26px] bg-[#1D4ED8]"></div>
                  <h1 className="text-xs sm:text-sm font-semibold">Selected</h1>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] lg:w-[26px] lg:h-[26px] bg-[#6E7191]"></div>
                  <h1 className="text-xs sm:text-sm font-semibold">Sold</h1>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[30%] flex flex-col gap-4 sm:gap-6">
              <div className="flex justify-center items-center flex-col bg-white shadow-md rounded-lg p-4 sm:p-6 gap-4 sm:gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                  <img
                    src={display?.src}
                    alt="order"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-sm sm:text-base lg:text-lg font-semibold">
                    {display?.id} Cinema
                  </h1>
                </div>
                {orderCinema.map((item, index) => (
                  <div
                    className="flex w-full justify-between p-2 sm:p-3 lg:p-5 text-center sm:text-left"
                    key={index}
                  >
                    <p className="text-xs sm:text-sm">{item.name}</p>
                    <p className="font-semibold text-xs sm:text-sm">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between bg-white shadow-md rounded-lg p-4 sm:p-5">
                <p className="text-base sm:text-lg font-semibold">
                  Total Payment
                </p>
                <p className="text-[#E95102] font-bold text-xl sm:text-2xl">
                  ${isSeat.length * 10}
                </p>
              </div>

              <div className="w-full flex justify-center items-center">
                <button
                  className="bg-[#E95102] text-white border-transparent hover:bg-orange-800 w-full p-4 sm:p-5 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-200"
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
