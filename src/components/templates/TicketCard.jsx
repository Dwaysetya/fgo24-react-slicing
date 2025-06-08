import image11 from "../../assets/images/signup/image 1.png";
import qrcode from "../../assets/images/qr.svg";
import Button from "../atoms/Button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function TicketCard() {
  const navigate = useNavigate();
  const transaksi = useSelector((state) => state.transaksi.historyTransaksi);
  const struk = [
    {
      title1: "Movie",
      title2: "Category",
      value1: transaksi.title,
      value: "PG-13",
    },
    {
      title1: "Date",
      title2: "Time",
      value1: transaksi.date,
      value: transaksi.time,
    },
    {
      title1: "Count",
      title2: "Seats",
      value1: transaksi.seat.length,
      value: transaksi.seat.join(","),
    },
  ];

  function handleClick() {
    Swal.fire({
      title: "Download Sukses!",
      icon: "success",
    });
  }

  function handleDone() {
    navigate("/movie");
  }

  return (
    <main className="w-full bg-[#D6D8E7] h-auto">
      <div
        className="w-full h-auto bg-cover bg-center flex flex-col gap-5 relative justify-center items-center"
        style={{ backgroundImage: `url(${image11})` }}
      >
        <section className="w-full flex flex-col lg:flex-row justify-center items-center relative p-4 sm:p-6 md:p-8 lg:p-10">
          <section className="w-full lg:w-[60%] p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="w-full bg-orange-500/90 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 rounded-tl-4xl rounded-br-4xl">
              <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center lg:text-left">
                  Thankyou For Purchasing
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-white text-center lg:text-left">
                  Lorem ipsum dolor sit amet consectetur. Quam pretium pretium
                  tempor integer sed magna et.
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white text-center lg:text-left">
                  Please Download Your Ticket
                </p>
              </div>
            </div>
          </section>
          <section className="w-full lg:w-[40%] flex flex-col justify-center gap-3 sm:gap-4 lg:gap-5 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20">
            <div className="w-full bg-white flex flex-col rounded-2xl">
              <div className="w-full flex justify-center items-center p-6 sm:p-8 lg:p-10">
                <img
                  src={qrcode}
                  alt="qr"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
                />
              </div>
              <div className="w-full bg-white flex justify-between items-center">
                <div className="w-[50px] h-[50px] bg-white">
                  <div className="w-[30px] h-[25px] bg-[#ECEDF2] rounded-tr-full"></div>
                  <div className="w-[30px] h-[25px] bg-[#ECEDF2] rounded-br-full"></div>
                </div>
                <div className="text-xs sm:text-sm">
                  - - - - - - - - - - - - - - - - - - - - -{" "}
                </div>
                <div className="w-[30px] h-[50px] bg-white">
                  <div className="w-[30px] h-[25px] bg-[#ECEDF2] rounded-tl-full"></div>
                  <div className="w-[30px] h-[25px] bg-[#ECEDF2] rounded-bl-full"></div>
                </div>
              </div>
              {struk.map((item, index) => (
                <div
                  key={index}
                  className="w-full px-6 sm:px-8 md:px-12 lg:px-15 py-3 sm:py-4 lg:py-5"
                >
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex justify-between">
                      <p className="text-[#AAAAAA] font-semibold text-xs">
                        {item.title1}
                      </p>
                      <p className="text-[#AAAAAA] font-semibold text-xs">
                        {item.title2}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm sm:text-base">{item.value1}</p>
                      <p className="text-sm sm:text-base">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex w-full p-6 sm:p-8 lg:p-10">
                <div className="flex w-full justify-between px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 border-1 rounded">
                  <p className="text-sm sm:text-base font-medium">Total</p>
                  <p className="text-sm sm:text-base font-medium">
                    ${transaksi.resultSeat}
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="button-hover w-full py-3 sm:py-4 text-sm sm:text-base"
              onClick={handleClick}
            >
              Download
            </Button>
            <Button
              className="button-hover w-full py-3 sm:py-4 text-sm sm:text-base"
              onClick={handleDone}
            >
              Done
            </Button>
          </section>
        </section>
      </div>
    </main>
  );
}

export default TicketCard;
