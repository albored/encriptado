const textInput = document.getElementById("textarea");
const btnEncriptar = document.querySelector(".btn-encriptar");
const displayImg = document.querySelector(".display-out-img");
const displayResult = document.querySelector(".display-out-result");
const textResult = document.querySelector(".display-result");
const btnCopyClear = document.querySelector(".btn-copy");
const btnDecript = document.querySelector(".btn-decript");
const textError = document.querySelector(".text-warning");
const btnHome = document.querySelector(".btn-home");
const about = document.querySelector(".about");
const aboutContainer = document.querySelector(".about-container");
const mainDiv = document.querySelector(".main");

btnEncriptar.addEventListener("click", function () {
  if (textInput.value === "") return;

  const data = textInput.value;
  textInput.value = "";

  if (checkData(data.split(""))) {
    const result = encriptarText(data.split(""));
    displayResultBox();
    textResult.textContent = result;

    btnCopyClear.addEventListener("click", function () {
      copyclear();
      copyData(result);
      textResult.textContent = " ";
    });
  } else inputError();
});

btnDecript.addEventListener("click", function () {
  if (textInput.value === "") return;
  const data = textInput.value;
  textInput.value = "";

  if (checkData(data.split(""))) {
    const result = decriptText(data);
    displayResultBox();
    textResult.textContent = result;
  } else inputError();
});

about.addEventListener("click", function (e) {
  e.preventDefault();
  mainDiv.classList.add("hidden");
  aboutContainer.classList.remove("hidden");
});

btnHome.addEventListener("click", function () {
  aboutContainer.classList.add("hidden");
  mainDiv.classList.remove("hidden");
});

function checkData(data) {
  const dictionary = "abcefghijklmnñopqrstuvwxyz ".split("");

  const checkUpper = data.some((word) => word.includes(word.toUpperCase()));
  const checkSymbol = data.every((word) => dictionary.includes(word));

  return checkSymbol;
}

function encriptarText(data) {
  const text = data.map((word) => {
    switch (word) {
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
        return word;
    }
  });

  return text.join("");
}

function decriptText(data) {
  let text = data.replaceAll("enter", "e");
  text = text.replaceAll("imes", "i");
  text = text.replaceAll("ai", "a");
  text = text.replaceAll("ober", "o");
  text = text.replaceAll("ufat", "u");

  return text;
}

function displayResultBox() {
  displayImg.classList.add("hidden");
  displayResult.classList.remove("hidden");
}

function copyclear() {
  displayImg.classList.remove("hidden");
  displayResult.classList.add("hidden");
}

function copyData(text) {
  navigator.clipboard.writeText(text);
}

function inputError() {
  textError.classList.remove("hidden");

  setTimeout(() => {
    textError.classList.add("hidden");
  }, 2000);
}
