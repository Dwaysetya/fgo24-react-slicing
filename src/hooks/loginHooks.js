export function registerHooks({ email, password }) {
  const getItem = JSON.parse(localStorage.getItem("Auth") || "[]");

  const isPassword = getItem.find((item) => item.password === password);

  if (isPassword) {
    return alert("Email sudah digunakan");
  }

  const dataUser = {
    id: Math.floor(Math.random() * 100),
    email: email,
    password: password,
  };

  getItem.push(dataUser);
  localStorage.setItem("Auth", JSON.stringify(getItem));

  return alert("Registrasi sukses");
}
