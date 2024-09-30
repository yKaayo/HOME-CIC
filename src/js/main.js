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
const data = document.querySelector("#graphic");

const chart = new Chart(data, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "Créditos",
        data: [2000, 1000, 3000, 2400, 1600, 3000, 800, 1200, 2300, 0, 0, 0],
        borderWidth: 1,
        backgroundColor: "#0063f7",
        borderColor: "#0063f7",
        borderSkipped: false,
      },
      {
        label: "Débitos",
        data: [600, 200, 800, 400, 1200, 500, 1300, 800, 500, 0, 0, 0],
        borderWidth: 1,
        backgroundColor: "#00DA85",
        borderColor: "#00DA85",
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  }
});

// Filter
document.querySelector("#filterForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const graphicType = document.querySelector("#graphicType").value;
  chart.config.type = graphicType;

  const graphicData = document.querySelector("#graphicData").value;
  if (graphicData == "creditData") {
    chart.data.datasets.pop();
    chart.data.datasets.pop();
    chart.data.datasets.push({
      label: "Créditos",
      data: [2000, 1000, 3000, 2400, 1600, 3000, 800, 1200, 2300, 0, 0, 0],
      borderWidth: 1,
      backgroundColor: "#0063f7",
      borderColor: "#0063f7",
    });
  } else if (graphicData == "debitData") {
    chart.data.datasets.pop();
    chart.data.datasets.pop();
    chart.data.datasets.push({
      label: "Débitos",
      data: [600, 200, 800, 400, 1200, 500, 1300, 800, 500, 0, 0, 0],
      borderWidth: 1,
      backgroundColor: "#00DA85",
      borderColor: "#00DA85",
    });
  } else if (graphicData == "bothData") {
    chart.data.datasets.pop();
    chart.data.datasets.pop();
    chart.data.datasets.push(
      {
        label: "Créditos",
        data: [2000, 1000, 3000, 2400, 1600, 3000, 800, 1200, 2300, 0, 0, 0],
        borderWidth: 1,
        backgroundColor: "#0063f7",
        borderColor: "#0063f7",
        borderSkipped: false,
      },
      {
        label: "Débitos",
        data: [600, 200, 800, 400, 1200, 500, 1300, 800, 500, 0, 0, 0],
        borderWidth: 1,
        backgroundColor: "#00DA85",
        borderColor: "#00DA85",
        borderSkipped: false,
      }
    );
  }

  chart.update();
});

document.querySelector('#filterCredit').addEventListener('submit', (e) => {
  e.preventDefault();

  let minValue = parseInt(document.querySelector('#filterCreditInput').value, 10);
  if (minValue > 1000) {
    document.querySelector('.credit-cards').classList.add('d-sm-none');
    document.querySelector('.credit-cards').classList.remove('d-sm-flex');
    document.querySelector('#carouselCredit').classList.add('d-none');
    document.querySelector('#carouselCredit').classList.remove('d-flex');
    document.querySelector('#nullCredit').textContent = 'Não há créditos disponíveis';
  } else if (minValue <= 1000){
    document.querySelector('.credit-cards').classList.add('d-sm-flex');
    document.querySelector('.credit-cards').classList.remove('d-sm-none');
    document.querySelector('#carouselCredit').classList.add('d-flex');
    document.querySelector('#carouselCredit').classList.remove('d-none');
    document.querySelector('#nullCredit').textContent = '';
  }
});

document.querySelector('#filterDebit').addEventListener('submit', (e) => {
  e.preventDefault();

  let minValue = parseInt(document.querySelector('#filterDebitInput').value, 10);
  if (minValue > 1000) {
    document.querySelector('.debit-cards').classList.add('d-sm-none');
    document.querySelector('.debit-cards').classList.remove('d-sm-flex');
    document.querySelector('#carouselDebit').classList.add('d-none');
    document.querySelector('#carouselDebit').classList.remove('d-flex');
    document.querySelector('#nullDebit').textContent = 'Não há débitos disponíveis';
  } else if (minValue <= 1000){
    document.querySelector('.debit-cards').classList.add('d-sm-flex');
    document.querySelector('.debit-cards').classList.remove('d-sm-none');
    document.querySelector('#carouselDebit').classList.add('d-flex');
    document.querySelector('#carouselDebit').classList.remove('d-none');
    document.querySelector('#nullDebit').textContent = '';
  }
});
