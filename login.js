const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");
const regisButton = document.getElementById("btnRegis");
const logButton = document.getElementById("btnLogin");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
const formRegis = document.forms.regisform;

const storageKey = 'user_data';

function storeData(nama, email, password) {
  const data = JSON.parse(localStorage.getItem(storageKey)) || [];
  data.push({ nama, email, password });
  localStorage.setItem(storageKey, JSON.stringify(data));
}

formRegis.addEventListener('submit', (event) => {
  event.preventDefault();
  const nama = formRegis.nama.value;
  const email = formRegis.email.value;
  const password = formRegis.password.value;
  storeData(nama, email, password);
  alert('Registrasi berhasil, silahkan login');
  formRegis.reset();
});

const formLogin = document.forms.loginform;

function checkData(email, password) {
  const data = JSON.parse(localStorage.getItem(storageKey)) || [];
  const user = data.find((user) => user.email === email && user.password === password);
  return user;
}

formLogin.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = formLogin.emaillog.value;
  const password = formLogin.passwordlog.value;
  const user = checkData(email, password);
  if (user) {
    alert(`Selamat datang ${user.nama}!`);
    window.location.href = "home.html";
    formLogin.reset();
  } else {
    alert('Email atau password salah!');
  }
});


