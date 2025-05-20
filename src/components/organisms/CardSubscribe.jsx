import Subscribe from "../molecules/Subscribe";
import Button from "../atoms/Button";

function CardSubscribe() {
  return (
    <div className="flex flex-col gap-10">
      <Subscribe />
      <Button>subscribe now</Button>
    </div>
  );
}

export default CardSubscribe;
