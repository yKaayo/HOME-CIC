// Tooltips Bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

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

// List Toggle Active
const listGroup = document.querySelectorAll('#list-menu li a');

for (let i = 0; i < listGroup.length; i++) {
  listGroup[i].addEventListener('click', () => {
    listGroup.forEach(item => {
      item.classList.remove('active');
    });

    listGroup[i].classList.add('active');
  });
}

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
