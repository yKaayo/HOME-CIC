// Side Menu
const btnToggler = document.querySelector("#btn-togler");
const iconToggler = document.querySelector("#btn-togler-icon");

const textToShow = document.querySelectorAll('#list-menu li a p');

btnToggler.addEventListener("click", () => {
  const textList = ['Home', 'Controle', 'Relatório', 'Arquivo', 'Corporação'];
  
  if (iconToggler.classList.contains("bi-justify-left")) {
    iconToggler.classList.replace("bi-justify-left", "bi-x");

    // Show Text

    for (let i = 0; i < textList.length; i++) {
      textToShow[i].textContent = textList[i];
      textToShow[i].classList.add('ms-3');
    }
  } else {
    iconToggler.classList.replace("bi-x", "bi-justify-left");

    // Hide Text
    for (let i = 0; i < textList.length; i++) {
      if (textToShow[i]) {
        textToShow[i].textContent = '';
        textToShow[i].classList.remove('ms-3');
      }
    }
  }
});

// Show or Hide Password
const eye = document.querySelector("#eye");
const inputPassword = document.querySelector("#password");

eye.addEventListener("click", () => {
  if (inputPassword.type === "password") {
    inputPassword.setAttribute("type", "text");
    eye.classList.replace("bi-eye", "bi-eye-slash");
  } else {
    inputPassword.setAttribute("type", "password");
    eye.classList.replace("bi-eye-slash", "bi-eye");
  }
});











// const btnOpenSideMenu = document.querySelector('[data-bs-target="#list"]');
// const fieldsToCreateParagraph = document.querySelectorAll(
//   ".navbar-nav .list-group-item a"
// );
// const listToCreateParagraphContent = ['Home', 'Controle', 'Relatório', 'Arquivo', 'Corporação']

// btnOpenSideMenu.addEventListener("click", () => {
//   fieldsToCreateParagraph.forEach(() => {
//     const paragraph = document.createElement("p");
//     paragrafo.textContent = listToCreateParagraphContent;
//     paragrafo.classList.add();
//     fieldsToCreateParagraph.appendChild(paragraph);
//   });
// });
