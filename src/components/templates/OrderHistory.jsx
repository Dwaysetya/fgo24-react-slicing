import React, { useState } from "react";
import {
  TbSquareRoundedChevronDown,
  TbSquareRoundedChevronUp,
} from "react-icons/tb";
import { useSelector } from "react-redux";
import ebu from "../../assets/images/orderpage/ebu.svg";
import order from "../../assets/images/orderpage/order.svg";
import hiflix from "../../assets/images/orderpage/hiflix.svg";

const OrderHiistory = () => {
  const historyBook = useSelector((state) => state.transaksi.historyBook);
  const auth = useSelector((state) => state.auth.currentUser);

  const [isToggle, setIsToggle] = useState(null);

  const toggleDetails = (index) => {
    setIsToggle((prev) => (prev === index ? null : index));
  };

  const cinema = [
    { id: "ebu", src: ebu },
    { id: "hiflix", src: hiflix },
    { id: "cineone", src: order },
  ];

  const history = historyBook?.filter((item) => item.id === auth.id);

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
            className="flex w-full flex-col bg-white rounded-2xl p-6 shadow-sm mb-4"
          >
            <div className="bg-white w-full rounded-2xl p-6 flex justify-between items-center">
              <div className="w-full">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{order.date}</p>
                    <h3 className="text-xl font-semibold text-gray-800 mt-1">
                      {order.movie}
                    </h3>
                  </div>
                  <div className="p-5">
                    {/* Gambar cinema */}
                    {matchedCinema ? (
                      <img
                        src={matchedCinema.src}
                        alt={order.cinema}
                        className="w-20 h-10 object-contain"
                      />
                    ) : (
                      <p className="text-gray-400">{order.cinema}</p>
                    )}
                  </div>
                </div>
                <div className="flex gap-3 mt-4 justify-between w-full">
                  <div className="flex gap-3">
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${
                        order.ticketStatus === "Ticket in active"
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {order.ticketStatus}
                    </span>
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${
                        order.status === "Not Paid"
                          ? "bg-red-100 text-red-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <button
                    className="text-gray-500 hover:text-gray-700 flex items-center gap-1"
                    onClick={() => toggleDetails(index)}
                  >
                    Show Details
                    {isToggle === index ? (
                      <TbSquareRoundedChevronUp />
                    ) : (
                      <TbSquareRoundedChevronDown />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {isToggle === index && (
              <div className="p-6">
                <h3 className="text-md font-semibold mb-3">
                  Ticket Information
                </h3>
                <div className="flex gap-6">
                  {/* QR */}
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?data=sample&size=100x100"
                    alt="QR Code"
                    className="w-24 h-24"
                  />
                  {/* Info */}
                  <div className="flex-1 grid grid-cols-3 gap-y-2 text-sm text-gray-700">
                    <div>
                      <p className="text-gray-400">Category</p>
                      <p>PG-13</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Time</p>
                      <p>{history[index]?.time}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Seats</p>
                      <p>{history[index]?.seat?.join(", ")}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Movie</p>
                      <p>{history[index]?.title?.slice(0, 10)}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Date</p>
                      <p>{history[index]?.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Count</p>
                      <p>{history[index]?.seat?.length}</p>
                    </div>
                  </div>
                  {/* Total */}
                  <div className="text-right text-black font-semibold text-lg self-end">
                    <p>Total</p>
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

export default OrderHiistory;
