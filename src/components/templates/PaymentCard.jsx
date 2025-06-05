import Button from "../atoms/Button";
import image from "../../assets/images/logo/google.svg";
import image1 from "../../assets/images/logo/dana.svg";
import image2 from "../../assets/images/logo/paypal.svg";
import image3 from "../../assets/images/logo/visa.svg";
import { useEffect, useState } from "react";
import Chip from "../atoms/Chip";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addHistoryBook } from "../../redux/reducers/historyTransaksi";
import Skeleton from "react-loading-skeleton";

function PaymentCard() {
  const transaksi = useSelector((state) => state.transaksi.historyTransaksi);
  const users = useSelector((state) => state.auth.currentUser);
  const [selectedCinema, setSelectedCinema] = useState({
    nameRek: "",
    rekening: "",
  });
  const [isModal, setIsModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paymentCinema = [
    {
      name: "DATE & TIME",
      value: `${transaksi.date} at ${transaksi.time}PM`,
    },
    {
      name: "MOVIE TITLE",
      value: transaksi.title,
    },
    {
      name: "CINEMA NAME",
      value: transaksi.cinema,
    },
    {
      name: "NUMBER OF TICKETS",
      value: `${transaksi.seat.length} pieces`,
    },
    {
      name: "TOTAL PAYMENT",
      value: `$${transaksi.resultSeat}.00`,
    },
  ];

  const cinemaLogos = [
    { id: "Google", image: image, rek: "12321328913829724" },
    { id: "Dana", image: image1, rek: "08300872345" },
    { id: "Paypall", image: image2, rek: "77731245" },
    { id: "Visa", image: image3, rek: "44728913822724" },
  ];

  const isUserAvailable =
    users?.name && users?.lastname && users?.email && users?.phone;

  useEffect(() => {
    if (users?.email) {
      setFormData((prev) => ({
        ...prev,
        email: users.email,
        name:
          users.name && users.lastname
            ? `${users.name} ${users.lastname}`
            : prev.name,
        phone: users.phone || prev.phone,
      }));
    }
  }, [users]);

  useEffect(() => {
    const allFilled = formData.name && formData.email && formData.phone;
    setIsValid(!!allFilled);
  }, [formData]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    setIsModal(true);
  }

  function handleClick() {
    const finalData = {
      ...transaksi,
      payment: {
        nameRek: selectedCinema.nameRek,
        rekening: selectedCinema.rekening,
      },
    };
    dispatch(addHistoryBook(finalData));
    navigate("/ticketresult");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const date = new Date();
  const [hour, minute] = transaksi.time.split(":").map(Number);
  date.setHours(hour);
  date.setMinutes(minute);
  date.setHours(date.getHours() + 2);

  const newTime = date.toTimeString().slice(0, 5);
  console.log(newTime);

  if (!users) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#D6D8E7] p-10">
        <div className="w-[50%] bg-white p-10 rounded shadow space-y-6">
          <Skeleton height={30} width={200} />
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} height={50} />
          ))}

          <Skeleton height={30} width={150} />
          <Skeleton height={45} />
          <Skeleton height={45} />
          <Skeleton height={45} />

          <Skeleton height={30} width={150} className="mt-5" />
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} circle height={64} width={64} />
            ))}
          </div>

          <Skeleton height={50} />
        </div>
      </div>
    );
  }

  return (
    <main className="w-full bg-[#D6D8E7]">
      {/* MODAL */}
      {isModal && (
        <div className="flex w-full min-h-svw absolute z-99 justify-center items-center bg-black/90 m-0">
          <div className="flex w-full h-screen flex-col gap-10 bg-black/10 justify-center items-center">
            <div className="w-[573px] bg-white rounded-3xl p-10 flex flex-col justify-center items-center gap-7">
              <h1 className="text-2xl font-bold">Payment Info</h1>
              <div className="flex w-full items-center justify-between gap-5">
                <p className="font-normal text-sm">No. Rekening Virtual :</p>
                <p>{selectedCinema.rekening}</p>
                <Chip>Copy</Chip>
              </div>
              <div className="flex w-full items-center justify-between gap-5">
                <p className="font-normal text-sm">Total Payment :</p>
                <p className="text-[#1D4ED8] text-lg font-bold">
                  ${transaksi.resultSeat}
                </p>
              </div>
              <div className="flex w-full text-sm text-center">
                Pay this payment bill before it is due,{" "}
                <span className="text-red-600 ml-1">{newTime}</span>
              </div>
              <div className="w-full">
                <button
                  onClick={handleClick}
                  className="w-full bg-[#E95102] text-white hover:bg-orange-800 p-5 rounded-4xl"
                >
                  Check Payment
                </button>
              </div>
              <button
                className="w-full bg-[#E95102] text-white hover:bg-orange-800 p-5 rounded-4xl"
                onClick={() => setIsModal(false)}
              >
                Pay Later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FORM */}
      <section className="w-full flex justify-center items-center relative p-10">
        <section className="w-[50%] flex flex-col justify-center gap-5 p-10 bg-white">
          <h1 className="text-2xl">Payment Info</h1>
          {paymentCinema.map((item, index) => (
            <div key={index} className="w-full shadow-md p-5">
              <p className="font-normal text-sm text-[#8692A6]">{item.name}</p>
              <p className="text-base font-normal">{item.value}</p>
            </div>
          ))}

          <h1 className="text-2xl font-bold mt-5">Personal Information</h1>
          <form onSubmit={handleSubmit}>
            {/* Fullname */}
            <div className="flex flex-col gap-5">
              <label className="text-black px-5 mt-5">Fullname</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                readOnly={isUserAvailable}
                onChange={handleChange}
                required
                className=" payment w-full p-3 outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-5">
              <label className="text-black px-5 mt-5">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                readOnly={isUserAvailable}
                onChange={handleChange}
                required
                className=" payment w-full p-3 outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-5">
              <label className="text-black px-5 mt-5">Phone Number</label>
              <input
                name="phone"
                type="text"
                placeholder="Enter your phone"
                value={formData.phone}
                readOnly={isUserAvailable}
                onChange={handleChange}
                required
                className="payment  w-full p-3 outline-none"
              />
            </div>

            {/* Payment Method */}
            <div className="p-5">
              <h1 className="text-2xl font-bold">Payment Method</h1>
            </div>
            <div className="flex w-full justify-center gap-7 p-4">
              {cinemaLogos.map((item) => (
                <label key={item.id}>
                  <input
                    type="radio"
                    name="cinema"
                    value={item.id}
                    checked={selectedCinema.nameRek === item.id}
                    onChange={() =>
                      setSelectedCinema({
                        nameRek: item.id,
                        rekening: item.rek,
                      })
                    }
                    className="hidden"
                  />
                  <div
                    className={`w-16 h-16 p-2 cursor-pointer rounded-full border-2 transition-all
                      ${
                        selectedCinema.nameRek === item.id
                          ? "border-blue-600"
                          : "border-gray-300"
                      }
                      hover:shadow-lg flex items-center justify-center`}
                  >
                    <img src={item.image} alt={item.id} className="w-10 h-10" />
                  </div>
                </label>
              ))}
            </div>

            {/* Submit */}
            <div className="w-full flex justify-center items-centers mt-5">
              <button
                type="submit"
                className={`w-full p-5 rounded-4xl text-white ${
                  isValid
                    ? "bg-[#E95102] hover:bg-orange-800"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!isValid}
              >
                Pay your order
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}

export default PaymentCard;
