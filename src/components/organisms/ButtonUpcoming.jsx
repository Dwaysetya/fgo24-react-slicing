import Button from "../atoms/Button";

function ButtonUpcoming() {
  return (
    <div className="flex gap-10">
      <Button variant="primary">ACTION</Button>
      <Button variant="secondary">ADVENTURE</Button>
      <Button variant="secondary">COMEDY</Button>
      <Button variant="secondary">SCI-FI</Button>
    </div>
  );
}

export default ButtonUpcoming;
