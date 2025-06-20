import logoEbu from "../../assets/images/footer/ebu.svg";
import logohiflix from "../../assets/images/footer/hiflix.svg";
import logocineone from "../../assets/images/footer/cineone.svg";

function Checkbox({ imageSrc, checked, onChange }) {
  return (
    <div className="flex justify-center">
      <label
        className={`relative rounded-[16px] border-2 flex items-center justify-center cursor-pointer transition-all duration-300
          ${
            checked
              ? "border-[#1e2c39] bg-orange-500"
              : "bg-[#1e2c39] border-gray-300"
          } 
          hover:border-[#b20f15] hover:bg-orange-500 w-[296px] h-[153px]`}
      >
        <input
          type="radio"
          checked={checked}
          onChange={onChange}
          className="absolute opacity-0 w-0 h-0"
        />
        <img src={imageSrc} alt="cinema" className="max-h-[80%]" />
        {!checked && (
          <span className="absolute top-3 right-3 w-4 h-4 bg-white rounded-full border-2 border-[#1e2c39]" />
        )}
      </label>
    </div>
  );
}

function CustomCheckbox({ selectedCinema, onSelectCinema }) {
  const cinemas = [
    { id: "ebu", src: logoEbu },
    { id: "hiflix", src: logohiflix },
    { id: "cineone", src: logocineone },
  ];

  return (
    <div className="w-full flex justify-center flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
      {cinemas.map((cinema) => (
        <Checkbox
          key={cinema.id}
          imageSrc={cinema.src}
          checked={selectedCinema === cinema.id}
          onChange={() => onSelectCinema(cinema.id)}
        />
      ))}
    </div>
  );
}

export default CustomCheckbox;
