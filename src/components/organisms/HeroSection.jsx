import Chip from "../atoms/Chip";
import headerImage from "../../assets/images/movie/image 23.png";
import imageBack from "../../assets/images/movie/opacity.png";
import NavigationArrow from "../molecules/NavigationArrow";

function HeroSection() {
  return (
    <section className="w-full">
      <div
        className="w-full h-100 sm:h-80 bg-[35%] md:h-96 bg-cover sm:bg-center flex flex-col gap-5 relative rounded-[24px] sm:rounded-[32px] md:rounded-[48px]"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div
          className="w-full h-100 sm:h-80 md:h-96 bg-cover bg-center flex flex-col gap-5 absolute rounded-[24px] sm:rounded-[32px] md:rounded-[48px]"
          style={{ backgroundImage: `url(${imageBack})` }}
        >
          <div className="mt-40 sm:mt-16 md:mt-[130px] p-4 sm:p-6 md:p-[40px] flex flex-col lg:flex-row gap-5 lg:justify-between">
            <div className="flex-col gap-10 lg:w-[70%]">
              <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[30%]">
                <Chip>LIST MOVIE OF THE WEEK</Chip>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 mt-5">
                <h3 className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-2xl text-white">
                  Experience the Magic of Cinema:
                </h3>
                <span className="text-[#E95102] font-black text-xl sm:text-2xl md:text-3xl lg:text-2xl">
                  Book Your Tickets Today
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-light text-white mt-3 md:mt-5">
                Sign up and get the ticket with a lot of discount
              </p>
            </div>
            <div className="hidden lg:flex justify-center lg:justify-end">
              <NavigationArrow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
