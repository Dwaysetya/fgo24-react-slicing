import { useNavigate } from "react-router-dom";
import { addHistoryBook } from "../../redux/reducers/historyTransaksi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import image from "../../assets/images/logo/google.svg";
import Chip from "../atoms/Chip";
import image1 from "../../assets/images/logo/dana.svg";
import image2 from "../../assets/images/logo/paypal.svg";
import image3 from "../../assets/images/logo/visa.svg";

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

  return (
    <main className="w-full bg-[#D6D8E7] min-h-screen">
      {isModal && (
        <div className="flex w-full min-h-screen fixed inset-0 z-50 justify-center items-center bg-black/90 p-4">
          <div className="flex w-full h-full flex-col gap-6 sm:gap-8 lg:gap-10 bg-black/10 justify-center items-center">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center items-center gap-5 sm:gap-6 lg:gap-7 mx-4">
              <h1 className="text-xl sm:text-2xl font-bold text-center">
                Payment Info
              </h1>

              <div className="flex w-full items-center justify-between gap-3 sm:gap-5 text-sm sm:text-base">
                <p className="font-normal text-xs sm:text-sm flex-shrink-0">
                  No. Rekening Virtual :
                </p>
                <p className="text-center flex-1 break-all text-xs sm:text-base">
                  {selectedCinema.rekening}
                </p>
                <Chip
                  textClassName="text-xs sm:text-base text-white"
                  className="flex bg-[#b20f15] rounded-full py-2 px-1 sm:py-[13px] sm:px-[24px]"
                >
                  Copy
                </Chip>
              </div>

              <div className="flex w-full items-center justify-between gap-3 sm:gap-5">
                <p className="font-normal text-xs sm:text-sm">
                  Total Payment :
                </p>
                <p className="text-[#1D4ED8] text-base sm:text-lg font-bold">
                  ${transaksi.resultSeat}
                </p>
              </div>

              <div className="flex w-full text-xs sm:text-sm text-center justify-center flex-wrap">
                <span>Pay this payment bill before it is due,</span>
                <span className="text-red-600 ml-1">{newTime}</span>
              </div>

              <div className="w-full space-y-3 sm:space-y-4">
                <button
                  onClick={handleClick}
                  className="w-full bg-[#b20f15] text-white hover:bg-orange-800 p-4 sm:p-5 rounded-2xl sm:rounded-4xl text-sm sm:text-base font-medium transition-colors"
                >
                  Check Payment
                </button>
                <button
                  className="w-full bg-[#b20f15] text-white hover:bg-orange-800 p-4 sm:p-5 rounded-2xl sm:rounded-4xl text-sm sm:text-base font-medium transition-colors"
                  onClick={() => setIsModal(false)}
                >
                  Pay Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <section className="w-full flex justify-center items-center relative px-4 py-6 sm:px-6 sm:py-8 lg:p-10">
        <section className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl flex flex-col justify-center gap-4 sm:gap-5 lg:gap-6 p-6 sm:p-8 lg:p-10 bg-white rounded-lg shadow-lg">
          <h1 className="text-xl sm:text-2xl font-bold">Payment Info</h1>

          <div className="space-y-3 sm:space-y-4">
            {paymentCinema.map((item, index) => (
              <div
                key={index}
                className="w-full shadow-md rounded-lg p-4 sm:p-5 bg-gray-50"
              >
                <p className="font-normal text-xs sm:text-sm text-[#8692A6] mb-1 sm:mb-2">
                  {item.name}
                </p>
                <p className="text-sm sm:text-base font-normal text-gray-900 break-words">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <h1 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-5">
            Personal Information
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="flex flex-col gap-2 sm:gap-3">
              <label className="text-gray-900 text-sm sm:text-base font-medium">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                readOnly={isUserAvailable}
                onChange={handleChange}
                required
                className="payment w-full p-3 sm:p-4 outline-none border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <label className="text-gray-900 text-sm sm:text-base font-medium">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                readOnly={isUserAvailable}
                onChange={handleChange}
                required
                className="payment w-full p-3 sm:p-4 outline-none border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <label className="text-gray-900 text-sm sm:text-base font-medium">
                Phone Number
              </label>
              <input
                name="phone"
                type="text"
                placeholder="Enter your phone"
                value={formData.phone}
                readOnly={isUserAvailable}
                onChange={handleChange}
                required
                className="payment w-full p-3 sm:p-4 outline-none border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm sm:text-base"
              />
            </div>
            <div className="pt-4 sm:pt-5">
              <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Payment Method
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 justify-items-center">
                {cinemaLogos.map((item) => (
                  <label key={item.id} className="cursor-pointer">
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
                      className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 p-3 sm:p-4 cursor-pointer rounded-2xl border-2 transition-all duration-200
                        ${
                          selectedCinema.nameRek === item.id
                            ? "border-blue-600 bg-blue-50 shadow-lg scale-105"
                            : "border-gray-300 bg-white hover:border-gray-400"
                        }
                        hover:shadow-lg flex items-center justify-center`}
                    >
                      <img
                        src={item.image}
                        alt={item.id}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-center mt-2 font-medium text-gray-700">
                      {item.id}
                    </p>
                  </label>
                ))}
              </div>
            </div>
            <div className="w-full flex justify-center items-center pt-4 sm:pt-6">
              <button
                type="submit"
                className={`w-full p-4 sm:p-5 rounded-2xl sm:rounded-4xl text-white font-medium text-sm sm:text-base transition-all duration-200 ${
                  isValid
                    ? "bg-[#b20f15] hover:bg-orange-800 hover:shadow-lg"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!isValid}
              >
                Pay Your Order
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}

export default PaymentCard;
