// selectors
const configButtons = document.querySelectorAll(".config");
const modal = document.querySelector(".modal-config");
const modalCloseButton = document.querySelector(".modal-config__close-modal");
const root = document.querySelector(":root");
const themeToggleButton = document.querySelector(".theme-toggle");
const exitButton = document.querySelector(".exit");
const fontSizes = document.querySelectorAll(".sizes__pick-size span");
const cards = document.querySelectorAll(".card");
// state

const view = sessionStorage.getItem("theme");
const fontSize = sessionStorage.getItem("fontSize");

// onload
if (view) {
  document.body.classList.toggle("body__darkmode");
  root.style.setProperty(
    "--img-icon__theme",
    'url("../../assets/images/moon.svg")'
  );
  root.style.setProperty(
    "--img-icon__leave",
    'url("../../assets/images/leave-darkmode.svg")'
  );
  root.style.setProperty(
    "--img-icon__close",
    'url("../../assets/images/close.svg")'
  );
} else {
  root.style.setProperty(
    "--img-icon__theme",
    'url("../../assets/images/sun.svg")'
  );
  root.style.setProperty(
    "--img-icon__leave",
    'url("../../assets/images/leave-lightmode.svg")'
  );
  root.style.setProperty(
    "--img-icon__close",
    'url("../../assets/images/close-lightmode.svg")'
  );
}

const removeActiveClass = () => {
  fontSizes.forEach(function (size) {
    size.classList.remove("active");
  });
};

if (fontSize) {
  document.querySelector("html").style.fontSize = fontSize;
  removeActiveClass();
  if (fontSize == "0.85rem") {
    document.querySelector(".pick-size__small").classList.toggle("active");
  } else if (fontSize == "1rem") {
    document.querySelector(".pick-size__medium").classList.toggle("active");
  } else {
    document.querySelector(".pick-size__large").classList.toggle("active");
  }
}

// handlers
const handleConfigModalState = () => {
  if (modal.style.display == "none") {
    modal.style.display = "flex";
    document.body.style.overflowY = "hidden";
  } else {
    modal.style.display = "none";
    document.body.style.overflowY = "visible";
  }
};

const handleUserExit = () => {
  if (
    confirm(
      "Deseja sair da sua conta?\nVocê terá que realizar o login novamente caso saia."
    )
  ) {
    sessionStorage.clear();
    window.location.href = "../../../index.html";
  }
};

const handleThemeToggle = () => {
  document.body.classList.toggle("body__darkmode");
  sessionStorage.setItem("theme", "darkmode");
  if (document.body.classList.contains("body__darkmode")) {
    sessionStorage.setItem("theme", "darkmode");
    root.style.setProperty(
      "--img-icon__theme",
      'url("../../assets/images/moon.svg")'
    );
    root.style.setProperty(
      "--img-icon__leave",
      'url("../../assets/images/leave-darkmode.svg")'
    );
    root.style.setProperty(
      "--img-icon__close",
      'url("../../assets/images/close.svg")'
    );
  } else {
    sessionStorage.removeItem("theme");
    root.style.setProperty(
      "--img-icon__theme",
      'url("../../assets/images/sun.svg")'
    );
    root.style.setProperty(
      "--img-icon__leave",
      'url("../../assets/images/leave-lightmode.svg")'
    );
    root.style.setProperty(
      "--img-icon__close",
      'url("../../assets/images/close-lightmode.svg")'
    );
  }
};

// events
configButtons.forEach(function (button) {
  button.addEventListener("click", handleConfigModalState);
});

modalCloseButton.addEventListener("click", handleConfigModalState);

themeToggleButton.addEventListener("click", handleThemeToggle);

exitButton.addEventListener("click", handleUserExit);

fontSizes.forEach(function (size) {
  size.addEventListener("click", () => {
    let fontSizes;
    removeActiveClass();
    size.classList.toggle("active");
    console.log("ENTREI NO FONT SIZE HANDLER ===>" + size);
    if (size.classList.contains("pick-size__small")) {
      fontSizes = "0.85rem";
    } else if (size.classList.contains("pick-size__medium")) {
      fontSizes = "1rem";
    } else {
      fontSizes = "1.4rem";
    }
    sessionStorage.setItem("fontSize", fontSizes);
    document.querySelector("html").style.fontSize = fontSizes;
  });
});
