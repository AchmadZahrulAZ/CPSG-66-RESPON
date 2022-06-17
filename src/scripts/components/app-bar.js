class AppBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  
  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg  navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <a href="/index.html" class="navbar-brand p-0">
          <img class="m-0" src="./images/logo/respon-logo1.png" alt="Icon" width="20%">
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="#/home" class="nav-item nav-link">Home</a>
                <a href="./reservation.html" class="nav-item nav-link">Reservation</a>
                <a href="#/about" class="nav-item nav-link">About</a>
                <a href="#/contact" class="nav-item nav-link">Contact</a>
                <a href="#/login" class="btn rounded-pill btn-primary py-2 px-4 d-none d-lg-block">Login</a>
            </div>
        </div>
    </nav>
      `;
  }
}
  
customElements.define('app-bar', AppBar);
