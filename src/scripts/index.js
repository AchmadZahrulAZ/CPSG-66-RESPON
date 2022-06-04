// Import Regenator
import 'regenerator-runtime';
// Import Bootsrap
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import css
import '../styles/main.css';
import '../styles/responsive.css';

import './components/side-bar';
import './components/main-bar';
import App from './views/app';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

//  load (ketika halaman dimuat)
window.addEventListener('load', () => {
  let el = document.getElementById('wrapper');
  let toggleButton = document.getElementById('menu-toggle');

  toggleButton.onclick = function () {
    el.classList.toggle('toggled');
  };

  app.renderPage();
});
