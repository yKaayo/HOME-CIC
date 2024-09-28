// Tooltips Bootstrap
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Side Menu
const btnToggler = document.querySelector("#btn-togler");
const iconToggler = document.querySelector("#btn-togler-icon");

const textToShow = document.querySelectorAll("#list-menu li a p");

btnToggler.addEventListener("click", () => {
  const textList = ["Home", "Controle", "Relatório", "Arquivo", "Corporação"];

  if (iconToggler.classList.contains("bi-justify-left")) {
    iconToggler.classList.replace("bi-justify-left", "bi-x");

    // Show Text

    for (let i = 0; i < textList.length; i++) {
      textToShow[i].textContent = textList[i];
      textToShow[i].classList.add("ms-3");
    }
  } else {
    iconToggler.classList.replace("bi-x", "bi-justify-left");

    // Hide Text
    for (let i = 0; i < textList.length; i++) {
      if (textToShow[i]) {
        textToShow[i].textContent = "";
        textToShow[i].classList.remove("ms-3");
      }
    }
  }
});

// List Toggle Active
const listGroup = document.querySelectorAll("#list-menu li a");

for (let i = 0; i < listGroup.length; i++) {
  listGroup[i].addEventListener("click", () => {
    listGroup.forEach((item) => {
      item.classList.remove("active");
    });

    listGroup[i].classList.add("active");
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

// Gráfico
const data = document.querySelector('#graphic');

new Chart(data, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [{
      label: 'Créditos',
      data: [2000, 1000, 3000, 2400, 1600, 3000, 800, 1200, 2300, 0, 0, 0],
      borderWidth: 1,
      backgroundColor: '#0063f7',
      borderColor: '#0063f7'
    },
    {
      label: 'Débitos',
      data: [600, 200, 800, 400, 1200, 500, 1300, 800, 500, 0, 0, 0],
      borderWidth: 1,
      backgroundColor: '#00DA85',
      borderColor: '#00DA85'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

