// selectors
const configButtons = document.querySelectorAll(".config");
const modal = document.querySelector(".modal-config");
const modalPost = document.querySelector(".modal-post");
const modalCloseButtonConfig = document.querySelector(
  ".modal-config__close-modal"
);
const modalCloseButtonCard = document.querySelector(".modal-card__close-modal");
const root = document.querySelector(":root");
const themeToggleButton = document.querySelector(".theme-toggle");
const exitButton = document.querySelector(".exit");
const fontSizes = document.querySelectorAll(".sizes__pick-size span");
const cardsContainer = document.querySelector(".cards");
const inputSearch = document.querySelector(".pesquisa__input");
const inputSearch2 = document.querySelector(".pesquisa__input2");
let posts = [];
const closeButton = document.querySelector(".modal-card__close-modal");

// state
const view = sessionStorage.getItem("theme");
const fontSize = sessionStorage.getItem("fontSize");

// onload
window.addEventListener("DOMContentLoaded", () => {
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

  if (fontSize) {
    document.querySelector("html").style.fontSize = fontSize;
    removeActiveClass();
    if (fontSize === "0.85rem") {
      document.querySelector(".pick-size__small").classList.toggle("active");
    } else if (fontSize === "1rem") {
      document.querySelector(".pick-size__medium").classList.toggle("active");
    } else {
      document.querySelector(".pick-size__large").classList.toggle("active");
    }
  }

  // Initialize posts and search functionality
  getPosts();
  inputSearch.addEventListener("keyup", handleSearch);
  inputSearch2.addEventListener("keyup", handleSearch2);
});

// Remove active class from font size selectors
const removeActiveClass = () => {
  fontSizes.forEach(function (size) {
    size.classList.remove("active");
  });
};

// Handlers for modal state
const handleConfigModalState = () => {
  if (modal.style.display === "none" || modal.style.display === "") {
    modal.style.display = "flex";
    document.body.style.overflowY = "hidden";
  } else {
    modal.style.display = "none";
    document.body.style.overflowY = "visible";
  }
};

const handlePostModalState = () => {
  console.log(modalPost);
  console.log(closeButton);
  if (modalPost.style.display == "none" || modalPost.style.display == "") {
    modalPost.style.display = "flex";
    document.body.style.overflowY = "hidden";
  } else {
    modalPost.style.display = "none";
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

// Attach event listeners
configButtons.forEach((button) => {
  button.addEventListener("click", handleConfigModalState);
});

if (modalCloseButtonConfig) {
  modalCloseButtonConfig.addEventListener("click", handleConfigModalState);
}
if (modalCloseButtonCard) {
  modalCloseButtonCard.addEventListener("click", handlePostModalState);
}

themeToggleButton.addEventListener("click", handleThemeToggle);
exitButton.addEventListener("click", handleUserExit);

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    let newFontSize;
    removeActiveClass();
    size.classList.toggle("active");
    if (size.classList.contains("pick-size__small")) {
      newFontSize = "0.85rem";
    } else if (size.classList.contains("pick-size__medium")) {
      newFontSize = "1rem";
    } else {
      newFontSize = "1.4rem";
    }
    sessionStorage.setItem("fontSize", newFontSize);
    document.querySelector("html").style.fontSize = newFontSize;
  });
});

// Render posts
const renderPosts = (posts) => {
  cardsContainer.innerHTML = posts
    .map(
      (post) => `
    <div class="card" id="${post.idPostagem}">
        <div class="card_header">
           <div class="content__tag">${post.tag}</div>
           <div class="go-corner"><div class="go-arrow">→</div></div>
        </div>
        <div class="card__content">
          <p class="content_title">${post.titulo}</p>
          <p class="content__description">${post.conteudo}</p>
        </div>
        <div class="card__footer">
          <div class="card__image"></div>
          <p>${post.nome}</p>
        </div>
    </div>`
    )
    .join("");
  addCardClickEvents();
};

// Fetch posts from the server
function getPosts() {
  fetch("/post/listPosts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      posts = json;
      renderPosts(posts);
    });
}
closeButton.addEventListener("click", handlePostModalState);
console.log(handlePostModalState);
// Handle search functionality
const handleSearch = () => {
  const filteredPosts = posts.filter((post) =>
    post.titulo.toLowerCase().includes(inputSearch.value.toLowerCase())
  );
  renderPosts(filteredPosts);
};

const handleSearch2 = () => {
  const filteredPosts = posts.filter((post) =>
    post.titulo.toLowerCase().includes(inputSearch2.value.toLowerCase())
  );
  renderPosts(filteredPosts);
};

// Add click events to cards
const addCardClickEvents = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    console.log(card.children[1].children[1].innerHTML);
    card.addEventListener("click", () => {
      modalPost.innerHTML = `
      <div class="cardM" id="${card.id}">
      <div class="cardM_header">
         <div class="fechar">${card.children[0].children[0].innerHTML}</div>
         <div class="modal-card__close-modal" onclick="handlePostModalState()"></div>
      </div>
      <div class="cardM__content">
        <p class="content_title">${card.children[1].children[0].innerHTML}</p>
        <p class="content__description">${card.children[1].children[1].innerHTML}</p>
      </div>
      <div class="cardM__footer">
        <div class="cardM__image"></div>
        <p>Autor (a): ${card.children[2].children[1].innerHTML}</p>
      </div>
  </div>
      `;
      handlePostModalState();
    });
  });
};
