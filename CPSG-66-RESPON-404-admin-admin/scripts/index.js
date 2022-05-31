// Import Regenator
import 'regenerator-runtime';
// Import Bootsrap
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import css
import '../styles/main.css';
import '../styles/responsive.css';
//  load (ketika halaman dimuat)
window.addEventListener('load', () => {
  let el = document.getElementById('wrapper');
  let toggleButton = document.getElementById('menu-toggle');

  toggleButton.onclick = function () {
    el.classList.toggle('toggled');
  };
});
