import CardSupport from "../organisms/CardSupport";
import support1 from "../../assets/images/card-support/support1.svg";
import support2 from "../../assets/images/card-support/support2.svg";
import support3 from "../../assets/images/card-support/support3.svg";

function SupportList() {
  const supportData = [
    {
      img: support1,
      title: "Guaranted",
      paragraf:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a.",
    },
    {
      img: support2,
      title: "Affordable",
      paragraf:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a.",
    },
    {
      img: support3,
      title: "24/7 Customer Support",
      paragraf:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      {supportData.map((support, index) => (
        <CardSupport
          key={`support-${index}`}
          img={support.img}
          title={support.title}
          paragraf={support.paragraf}
        />
      ))}
    </div>
  );
}

export default SupportList;
