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
    <footer className="flex flex-row lg:flex-row justify-between items-start w-full">
      <div className="flex flex-col w-[50%]">
        <Logo size="large" />
        <p className="text-white mt-8">
          Stop waiting in line. Buy tickets conveniently, watch movies quietly.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-20 ">
          <div className="flex flex-col">
            <h3 className="text-white mb-10">EXPLORE</h3>
            <p className="text-white">Cinemas</p>
            <p className="text-white">Movies List</p>
            <p className="text-white">My Ticket</p>
            <p className="text-white">Notification</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white mb-5">OUR SPONSOR</h3>
            <img src={footer1} alt="ebu" />
            <img src={footer2} alt="one" />
            <img src={footer3} alt="hifli" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white mb-10">FOLLOW US</h3>
            <div className="flex">
              <img src={media1} alt="media" />
              <span className="text-white">tickitz.cinema.id</span>
            </div>
            <div className="flex">
              <img src={media2} alt="media" />
              <span className="text-white">tickitz.cinema.id</span>
            </div>
            <div className="flex">
              <img src={media3} alt="media" />
              <span className="text-white">tickitz.cinema.id</span>
            </div>
            <div className="flex">
              <img src={media4} alt="media" />
              <span className="text-white">tickitz.cinema.id</span>
            </div>
          </div>
        </div>
        <p className="text-white bottom-2 right-2 self-end">
          © 2025 Tickitz. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
