// selectors
const configButtons = document.querySelectorAll(".config");
const modal = document.querySelector(".modal-config");
const modalCloseButton = document.querySelector(".modal-config__close-modal");
const root = document.querySelector(":root");
const themeToggleButton = document.querySelector(".theme-toggle");
const exitButton = document.querySelector(".exit");
const fontSizes = document.querySelectorAll(".sizes__pick-size span");

console.log(fontSizes);
// state
const view = sessionStorage.getItem("theme");

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

// handlers
const handleConfigModalState = () => {
  if (modal.style.display == "none") {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
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

const removeSizeSelector = () => {
  fontSizes.forEach(function (size) {
    size.classList.remove("active");
  });
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
    removeSizeSelector();
    let fontSizes;
    size.classList.toggle("active");
    console.log("ENTREI NO FONTSIZEHANDLER ===>" + size);
    if (size.classList.contains("pick-size__small")) {
      fontSizes = "0.85rem";
    } else if (size.classList.contains("pick-size__medium")) {
      fontSizes = "1rem";
    } else {
      fontSizes = "1.4rem";
    }
    document.querySelector("html").style.fontSize = fontSizes;
  });
});
