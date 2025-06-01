import React, { useState } from "react";
import { TbSquareRoundedChevronDown } from "react-icons/tb";
import { TbSquareRoundedChevronUp } from "react-icons/tb";

const OrderHiistory = () => {
  const orders = [
    {
      date: "Tuesday, 07 July 2020 - 04:30pm",
      movie: "Spider-Man: Homecoming",
      cinema: "CineOne21",
      status: "Not Paid",
      ticketStatus: "Ticket in active",
    },
    {
      date: "Monday, 14 June 2020 - 02:00pm",
      movie: "Avengers: End Game",
      cinema: "ebu.id",
      status: "Paid",
      ticketStatus: "Ticket used",
    },
    {
      date: "Monday, 14 June 2020 - 02:00pm",
      movie: "Avengers: End Game",
      cinema: "ebu.id",
      status: "Paid",
      ticketStatus: "Ticket used",
    },
  ];

  const [isToggle, setIsToggle] = useState(null);

  const toggleDetails = (index) => {
    setIsToggle((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {orders.map((order, index) => (
        <div className="flex w-full flex-col bg-white rounded-2xl p-6 shadow-sm ">
          <div
            key={index}
            className="bg-white w-full rounded-2xl p-6 flex justify-between items-center"
          >
            <div className="w-full">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">{order.date}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mt-1">
                    {order.movie}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-lg font-handwritten text-gray-800 mt-1">
                    {order.cinema}
                  </p>
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
                <button className="text-gray-500 hover:text-gray-700 flex items-center gap-1">
                  Show Details
                  <div onClick={() => toggleDetails(index)}>
                    {isToggle === index ? (
                      <TbSquareRoundedChevronUp />
                    ) : (
                      <TbSquareRoundedChevronDown />
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
          {isToggle === index && (
            <div className="p-6">
              <h3 className="text-md font-semibold mb-3">Ticket Information</h3>
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
                    <p>2:00pm</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Seats</p>
                    <p>C4, C5, C6</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Movie</p>
                    <p>Spider-Man: ..</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Date</p>
                    <p>07 Jul</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Count</p>
                    <p>3 pcs</p>
                  </div>
                </div>
                {/* Total */}
                <div className="text-right text-black font-semibold text-lg self-end">
                  <p>Total</p>
                  <p className="text-2xl font-bold">$30.00</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default OrderHiistory;
