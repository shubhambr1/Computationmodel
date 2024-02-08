// Fetch input values and create initial data
const initialPopulation = parseInt(document.getElementById("initial-population").value);
const birthRate = parseFloat(document.getElementById("birth-rate").value) / 100;
const deathRate = parseFloat(document.getElementById("death-rate").value) / 100;
const immigrationRate = parseFloat(document.getElementById("immigration").value) / 100;
const emigrationRate = parseFloat(document.getElementById("emigration").value) / 100;
const healthcareEffect = parseFloat(document.getElementById("healthcare").value) / 100;

const years = 50;
const data = {
  labels: Array(years).fill().map((_, i) => i + 1),
  datasets: [{
    label: "Population",
    data: Array(years).fill(initialPopulation),
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 1
  }]
};

const ctx = document.getElementById("chart").getContext("2d");
const chart = new Chart(ctx, {
  type: "line",
  data: data,
  options: {
    zoom: {
      enabled: true,
      mode: 'x',
      range: {
        x: {
          min: 1,
          max: years,
        }
      },
    },
    hover: {
      animationDuration: 0,
      onHover: (e) => {
        const
