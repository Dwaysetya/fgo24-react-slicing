import React from "react";
import Button from "../atoms/Button";

function BookTikets() {
  return (
    <div className="flex w-full justify-between items-center">
      <div>
        <h1 className="font-semibold text-4xl">Book Tickets</h1>
      </div>
      <div>
        <Button variant="primary">Book now</Button>
      </div>
    </div>
  );
}

export default BookTikets;
