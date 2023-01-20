const textInput = document.querySelector(".textarea-input");
const textOut = document.querySelector(".result-out");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const imgEl = document.querySelector(".img");
const btnCopy = document.querySelector(".btn-copy");
const resultBox = document.querySelector(".result-div");
const errorMsg = document.querySelector(".error");
const about = document.querySelector(".btn-info");
const container = document.querySelector(".container");
const containerBox = document.querySelector(".container-box");

btnEncriptar.addEventListener("click", function () {
  if (textInput.value === "") return;
  if (textInput.value.split("").some((l) => l === +l)) {
    textInput.value = "";
    return textError();
  }

  const data = textInput.value.split("");
  textInput.value = "";

  const dictionary = "abcdefghijklmnñopqrstuvwxyz ".split("");
  const dataUpperCase = data.every((el) => el === el.toUpperCase());

  const dataSymbol = data.every((el) =>
    dictionary.some((letra) => letra === el)
  );
  console.log(dataUpperCase);

  if (!dataUpperCase && dataSymbol) handleEncriptar(data);
  else textError();
});

btnDesencriptar.addEventListener("click", function () {
  if (textInput.value === "") return;
  let data = textInput.value.replaceAll("enter", "e");
  data = data.replaceAll("imes", "i");
  data = data.replaceAll("ai", "a");
  data = data.replaceAll("ober", "o");
  data = data.replaceAll("ufat", "u");

  textOut.textContent = data;
  renderResult();

  btnCopy.addEventListener("click", function () {
    copyText(data);
    textOut.textContent = "";
    renderImg();
  });

  renderResult();
});

function handleEncriptar(data) {
  const msgEncriptado = data.map((el) => {
    switch (el) {
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "a":
        return "ai";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return el;
    }
  });
  const copyData = (textOut.textContent = msgEncriptado.join(""));

  btnCopy.addEventListener("click", function () {
    copyText(copyData);
    textOut.textContent = "";
    renderImg();
  });

  renderResult();
}

function renderResult() {
  imgEl.classList.add("hidden");
  textOut.classList.remove("hidden");
  btnCopy.classList.remove("hidden");
  resultBox.classList.remove("hidden");
}

function renderImg() {
  imgEl.classList.remove("hidden");
  textOut.classList.add("hidden");
  btnCopy.classList.add("hidden");
  resultBox.classList.add("hidden");
}

function copyText(text) {
  navigator.clipboard.writeText(text);
}

function textError() {
  errorMsg.style.opacity = "1";
  setTimeout(() => {
    errorMsg.style.opacity = "0";
  }, 2000);
}

about.addEventListener("click", function (e) {
  e.preventDefault();

  containerBox.classList.add("hidden");

  const html = `
      <div class="info">
        <p><span>Version: </span> 1.0.0</p>
        <p>
          <span>Descripcion:</span> Challenge de
          <a class="btn-oracle" href="https://www.aluracursos.com/" target="_blank"
            >Oracle - Alura.</a>
          Encriptador y desencriptador de Palabras.
        </p>
        <p><span>Autor:</span> Alvaro Cayo  <a class="btn-oracle" href="https://github.com/albored" target="_blank"><ion-icon name="logo-github"></ion-icon></a></p>
        <button class="btn-about btn"> <ion-icon name="home-outline"></ion-icon> Back to Home</button>
      </div>`;

  container.insertAdjacentHTML("afterbegin", html);

  const info = document.querySelector(".info");
  const btnAbout = document.querySelector(".btn-about");
  btnAbout.addEventListener("click", function () {
    info.classList.add("hidden");
    containerBox.classList.remove("hidden");
  });
});
