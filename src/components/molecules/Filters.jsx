import Title from "../atoms/Title";
import Button from "../atoms/Button";

function Filters() {
  return (
    <div className="flex flex-col ">
      <Title>Filters</Title>
      <div className="flex gap-10">
        <Button variant="secondary">ACTION</Button>
        <Button variant="secondary">ADVENTURE</Button>
        <Button variant="secondary">COMEDY</Button>
        <Button variant="secondary">SCI-FI</Button>
      </div>
    </div>
  );
}

export default Filters;
