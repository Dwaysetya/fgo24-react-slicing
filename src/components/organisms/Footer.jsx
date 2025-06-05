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
    <footer className="w-full px-4 py-8 lg:px-8 lg:py-12">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
        {/* Left Section - Logo and Description */}
        <div className="flex flex-col w-full lg:w-[45%] xl:w-[40%]">
          <Logo size="large" />
          <p className="text-white mt-4 lg:mt-8 text-sm lg:text-base leading-relaxed">
            Stop waiting in line. Buy tickets conveniently, watch movies
            quietly.
          </p>
        </div>

        {/* Right Section - Content */}
        <div className="flex flex-col w-full lg:w-[50%] xl:w-[55%]">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20">
            {/* Explore Section */}
            <div className="flex flex-col">
              <h3 className="text-white mb-4 lg:mb-6 font-semibold text-sm lg:text-base">
                EXPLORE
              </h3>
              <div className="flex flex-col gap-2 lg:gap-3">
                <p className="text-white text-sm lg:text-base hover:text-gray-300 cursor-pointer transition-colors">
                  Cinemas
                </p>
                <p className="text-white text-sm lg:text-base hover:text-gray-300 cursor-pointer transition-colors">
                  Movies List
                </p>
                <p className="text-white text-sm lg:text-base hover:text-gray-300 cursor-pointer transition-colors">
                  My Ticket
                </p>
                <p className="text-white text-sm lg:text-base hover:text-gray-300 cursor-pointer transition-colors">
                  Notification
                </p>
              </div>
            </div>

            {/* Sponsor Section */}
            <div className="flex flex-col">
              <h3 className="text-white mb-4 lg:mb-6 font-semibold text-sm lg:text-base">
                OUR SPONSOR
              </h3>
              <div className="flex flex-col gap-3 lg:gap-4">
                <img
                  src={footer1}
                  alt="ebu"
                  className="h-6 lg:h-8 w-auto object-contain"
                />
                <img
                  src={footer2}
                  alt="cineone"
                  className="h-6 lg:h-8 w-auto object-contain"
                />
                <img
                  src={footer3}
                  alt="hiflix"
                  className="h-6 lg:h-8 w-auto object-contain"
                />
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="flex flex-col sm:justify-center">
              <h3 className="text-white mb-4 lg:mb-6 font-semibold text-sm lg:text-base">
                FOLLOW US
              </h3>
              <div className="flex flex-col gap-3 lg:gap-4">
                <div className="flex items-center gap-2 lg:gap-3">
                  <img
                    src={media1}
                    alt="facebook"
                    className="h-4 lg:h-5 w-4 lg:w-5 object-contain"
                  />
                  <span className="text-white text-sm lg:text-base hover:text-gray-300 cursor-pointer transition-colors">
                    tickitz.cinema.id
                  </span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  <img
                    src={media2}
                    alt="instagram"
                    className="h-4 lg:h-5 w-4 lg:w-5 object-contain"
                  />
                  <span className="text-white text-sm lg:text-base hover:text-gray-300 cursor-pointer transition-colors">
                    tickitz.cinema.id
                  </span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  <img
                    src={media3}
                    alt="twitter"
                    className="h-4 lg:h-5 w-4 lg:w-5 object-contain"
                  />
                  <span className="text-white text-sm lg:text-base hover:text-gray-300 cursor-pointer transition-colors">
                    tickitz.cinema.id
                  </span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3">
                  <img
                    src={media4}
                    alt="youtube"
                    className="h-4 lg:h-5 w-4 lg:w-5 object-contain"
                  />
                  <span className="text-white text-sm lg:text-base hover:text-gray-300 cursor-pointer transition-colors">
                    tickitz.cinema.id
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 lg:mt-12 pt-4 lg:pt-6 border-t border-gray-700">
            <p className="text-white text-xs lg:text-sm text-center md:text-right">
              © 2025 Tickitz. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
