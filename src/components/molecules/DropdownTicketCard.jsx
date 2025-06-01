import React from "react";

const DropdownTicketCard = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white border border-blue-400 rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-400 mb-1">
            Monday, 14 June 2020 - 02:00pm
          </p>
          <h2 className="text-2xl font-semibold text-black">
            Avengers: End Game
          </h2>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Ebv.id_logo.svg/512px-Ebv.id_logo.svg.png"
          alt="ebv.id"
          className="h-6 object-contain"
        />
      </div>

      <hr className="border-gray-200 my-4" />

      {/* Status and Actions */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-4">
          <span className="bg-gray-200 text-gray-600 font-medium px-4 py-1 rounded-md text-sm">
            Ticket used
          </span>
          <span className="bg-blue-100 text-blue-600 font-medium px-4 py-1 rounded-md text-sm">
            Paid
          </span>
        </div>
        <button className="text-gray-400 text-sm flex items-center gap-1">
          Show Details
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Ticket Information */}
      <div>
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
    </div>
  );
};

export default DropdownTicketCard;
