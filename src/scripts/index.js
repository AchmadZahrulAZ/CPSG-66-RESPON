// Import Regenator
import 'regenerator-runtime';
// Import Bootsrap
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import css
import '../styles/main.css';
import '../styles/responsive.css';
//  load (ketika halaman dimuat)
window.addEventListener('load', () => {});

(function () {
  feather.replace({ 'aria-hidden': 'true' });

  // Graphs
  let ctx = document.getElementById('myChart');
  // eslint-disable-next-line no-unused-vars
  let myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [
        {
          data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff',
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
})();
