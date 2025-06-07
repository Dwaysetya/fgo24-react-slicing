import Logo from "../atoms/Logo";
import footer1 from "../../assets/images/footer/ebu.svg";
import footer2 from "../../assets/images/footer/cineone.svg";
import footer3 from "../../assets/images/footer/hiflix.svg";
import media1 from "../../assets/images/footer/facebook.svg";
import media2 from "../../assets/images/footer/insta.svg";
import media3 from "../../assets/images/footer/tweet.svg";
import media4 from "../../assets/images/footer/yutup.svg";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between lg:flex-row justify-between items-start w-full">
      <div className="flex flex-col w-full md:w-[50%]">
        <div className="hidden sm:flex">
          <Logo size="large" />
        </div>
        <div className="sm:hidden flex justify-center">
          <Logo size="small" />
        </div>
        <p className="text-white mt-8 text-center md:text-left ">
          Stop waiting in line. Buy tickets conveniently, watch movies quietly.
        </p>
      </div>
      <div className="flex md:flex-col w-full justify-center md:gap-0 flex-col gap-10 md:mt-0 mt-5">
        <div className="flex p-5 justify-between md:flex-row flex-col gap-20 md:gap-0 ">
          <div className="flex flex-col">
            <h3 className="text-white mb-10  text-center md:text-left">
              EXPLORE
            </h3>
            <p className="text-white text-center md:text-left">Cinemas</p>
            <p className="text-white text-center md:text-left">Movies List</p>
            <p className="text-white text-center md:text-left">My Ticket</p>
            <p className="text-white text-center md:text-left">Notification</p>
          </div>
          <div className="flex px-0 sm:px-50 md:px-0 flex-col gap-3">
            <h3 className="text-white mb-5 text-center md:text-left">
              OUR SPONSOR
            </h3>
            <img src={footer1} alt="ebu" />
            <img src={footer2} alt="one" />
            <img src={footer3} alt="hifli" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white mb-10 text-center md:text-left">
              FOLLOW US
            </h3>
            <div className="flex justify-center md:justify-normal">
              <img src={media1} alt="media" />
              <span className="text-white ">tickitz.cinema.id</span>
            </div>
            <div className="flex justify-center md:justify-normal">
              <img src={media2} alt="media" />
              <span className="text-white">tickitz.cinema.id</span>
            </div>
            <div className="flex justify-center md:justify-normal">
              <img src={media3} alt="media" />
              <span className="text-white">tickitz.cinema.id</span>
            </div>
            <div className="flex justify-center md:justify-normal">
              <img src={media4} alt="media" />
              <span className="text-white">tickitz.cinema.id</span>
            </div>
          </div>
        </div>
        <p className="text-white bottom-2 right-2 text-center md:self-end">
          © 2025 Tickitz. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
