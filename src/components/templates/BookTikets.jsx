import Button from "../atoms/Button";
import { Link } from "react-router-dom";

function BookTikets() {
  return (
    <div className="flex w-full justify-between items-center">
      <div>
        <h1 className="font-semibold text-4xl">Book Tickets</h1>
      </div>
      <Link to="/order/:id">
        <Button variant="primary" className="hover:bg-orange-700">
          Book now
        </Button>
      </Link>
    </div>
  );
}

export default BookTikets;
