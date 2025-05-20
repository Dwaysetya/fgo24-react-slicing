import Input from "../atoms/Input";

function Subscribe() {
  return (
    <div className="flex gap-2">
      <Input id="username" type="text" placeholder="Your First Name" />
      <Input id="email" type="text" placeholder="Your Email Address" />
    </div>
  );
}

export default Subscribe;
