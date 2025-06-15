import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Text from "../atoms/Text";

function SupportCard({ img, title, paragraf }) {
  return (
    <div className="flex gap-4 card-support bg-[#0D1A2F]">
      <Image src={img} alt={title} className="w-[54px] h-[54px]" />
      <div className="flex flex-col justify-center">
        <Title className="text-2xl font-semibold m-0">{title}</Title>
        <Text className="font-light text-base">{paragraf}</Text>
      </div>
    </div>
  );
}

export default SupportCard;
