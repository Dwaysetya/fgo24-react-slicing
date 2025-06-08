import { useState } from "react";
import { useSelector } from "react-redux";
import ebu from "../../assets/images/orderpage/ebu.svg";
import order from "../../assets/images/orderpage/order.svg";
import hiflix from "../../assets/images/orderpage/hiflix.svg";
import {
  TbSquareRoundedChevronDown,
  TbSquareRoundedChevronUp,
} from "react-icons/tb";

const OrderHistory = () => {
  const auth = useSelector((state) => state.auth.currentUser);
  const historyBook = useSelector((state) => state.transaksi.historyBook);
  const history = historyBook?.filter((item) => item.id === auth.id);
  const toggleDetails = (index) => {
    setIsToggle((prev) => (prev === index ? null : index));
  };

  const [isToggle, setIsToggle] = useState(null);

  const cinema = [
    { id: "ebu", src: ebu },
    { id: "hiflix", src: hiflix },
    { id: "cineone", src: order },
  ];

  const orders = history?.map((item) => ({
    date: `Tuesday, ${item.date} - ${item.time}pm`,
    movie: item.title,
    cinema: item.cinema,
    status: "Paid",
    ticketStatus: "Ticket used",
  }));

  return (
    <>
      {orders?.map((order, index) => {
        const matchedCinema = cinema.find((c) => c.id === order.cinema);

        return (
          <div
            key={index}
            className="flex w-full flex-col bg-white rounded-2xl shadow-sm mb-4 overflow-hidden"
          >
            <div className="bg-white w-full rounded-2xl p-4 sm:p-6 flex flex-col justify-between">
              <div className="w-full">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1 pr-2">
                    <p className="text-xs text-gray-500">{order.date}</p>
                    <h3 className="text-base sm:text-xl font-semibold text-gray-800 mt-1 leading-tight">
                      {order.movie}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {matchedCinema ? (
                      <img
                        src={matchedCinema.src}
                        alt={order.cinema}
                        className="w-12 h-6 sm:w-20 sm:h-10 object-contain"
                      />
                    ) : (
                      <p className="text-gray-400 text-xs">{order.cinema}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.ticketStatus === "Ticket in active"
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {order.ticketStatus}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === "Not Paid"
                        ? "bg-red-100 text-red-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="flex justify-end">
                  <button
                    className="text-gray-500 hover:text-gray-700 flex items-center gap-1 text-sm"
                    onClick={() => toggleDetails(index)}
                  >
                    Show Details
                    {isToggle === index ? (
                      <TbSquareRoundedChevronUp className="w-4 h-4" />
                    ) : (
                      <TbSquareRoundedChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {isToggle === index && (
              <div className="p-4 sm:p-6 border-t border-gray-100">
                <h3 className="text-sm font-semibold mb-4">
                  Ticket Information
                </h3>
                <div className="flex flex-col sm:hidden">
                  <div className="flex justify-center mb-4">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?data=sample&size=80x80"
                      alt="QR Code"
                      className="w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col gap-3 mb-4 text-xs">
                    <div className="bg-gray-50 p-3 rounded flex justify-between">
                      <span className="text-gray-400">Category</span>
                      <span className="font-medium">PG-13</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded flex justify-between">
                      <span className="text-gray-400">Time</span>
                      <span className="font-medium">
                        {history[index]?.time}
                      </span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded flex justify-between">
                      <span className="text-gray-400">Date</span>
                      <span className="font-medium">
                        {history[index]?.date}
                      </span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded flex justify-between">
                      <span className="text-gray-400">Count</span>
                      <span className="font-medium">
                        {history[index]?.seat?.length}
                      </span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Movie</span>
                      </div>
                      <p className="font-medium">{history[index]?.title}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Seats</span>
                      </div>
                      <p className="font-medium">
                        {history[index]?.seat?.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="text-center bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="text-xl font-bold text-orange-600">
                      ${history[index]?.resultSeat}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex gap-6">
                  <div className="flex justify-center lg:justify-start">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?data=sample&size=100x100"
                      alt="QR Code"
                      className="w-24 h-24"
                    />
                  </div>

                  <div className="flex-1 grid grid-cols-3 gap-x-4 gap-y-2 text-sm text-gray-700">
                    <div>
                      <p className="text-gray-400 text-sm">Category</p>
                      <p className="font-medium">PG-13</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Time</p>
                      <p className="font-medium">{history[index]?.time}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Seats</p>
                      <p className="font-medium">
                        {history[index]?.seat?.join(", ")}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Movie</p>
                      <p className="font-medium">
                        {history[index]?.title?.slice(0, 15)}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Date</p>
                      <p className="font-medium">{history[index]?.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Count</p>
                      <p className="font-medium">
                        {history[index]?.seat?.length}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-black font-semibold text-lg self-end">
                    <p className="text-base">Total</p>
                    <p className="text-2xl font-bold">
                      ${history[index]?.resultSeat}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default OrderHistory;
