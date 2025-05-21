export function registerHooks({ email, password }) {
  const getItem = JSON.parse(localStorage.getItem("Auth") || "[]");

  const isEmail = getItem.find((item) => item.email === email);

  if (isEmail) {
    return alert("Email sudah digunakan");
  }

  const dataUser = {
    id: Math.floor(Math.random() * 100),
    email,
    password,
  };

  getItem.push(dataUser);
  localStorage.setItem("Auth", JSON.stringify(getItem));

  return alert("Registrasi sukses");
}
