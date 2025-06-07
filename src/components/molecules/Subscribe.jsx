import Input from "../atoms/Input";

function Subscribe() {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <Input id="username" type="text" placeholder="Your First Name" />
      <Input id="email" type="text" placeholder="Your Email Address" />
    </div>
  );
}

export default Subscribe;
