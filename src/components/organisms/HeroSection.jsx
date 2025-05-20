import Chip from "../atoms/Chip";
import headerImage from "../../assets/images/movie/image 23.png";
import imageBack from "../../assets/images/movie/opacity.png";
import NavigationArrow from "../molecules/NavigationArrow";

function HeroSection() {
  return (
    <section className="section-1">
      <div
        className="w-full h-96 bg-cover bg-center flex flex-col gap-5 relative rounded-[48px]"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div
          className="w-full h-96 bg-cover bg-center flex flex-col gap-5 absolute rounded-[48px]"
          style={{ backgroundImage: `url(${imageBack})` }}
        >
          <div className="mt-[130px] p-[40px] flex gap-5 justify-between">
            <div className="flex-col gap-10">
              <div className="w-[30%]">
                <Chip>LIST MOVIE OF THE WEEK</Chip>
              </div>
              <div className="flex gap-5 mt-5">
                <h3 className="font-normal text-4xl text-white">
                  Experience the Magic of Cinema:
                </h3>
                <span className="text-[#E95102] font-black text-4xl">
                  Book Your Tickets Today
                </span>
              </div>
              <p className="text-lg font-light text-white mt-5">
                Sign up and get the ticket with a lot of discount
              </p>
            </div>
            <NavigationArrow />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
