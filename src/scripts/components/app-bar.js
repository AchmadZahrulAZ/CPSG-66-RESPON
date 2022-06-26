class AppBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  
  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg  navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
    <a href="/" class="logo me-auto"><img src="./images/logo/respon-logo1.png" alt="" class="img-fluid"></a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto p-4 p-lg-0">
                <li><a href="#/home" class="nav-item nav-link">Home</a></li>
                <li><a href="#/reservation" class="nav-item nav-link">Reservation</a></li>
                <li><a href="#/about" class="nav-item nav-link">About</a></li>
                <li><a href="#/contact" class="nav-item nav-link">Contact</a></li>
            </ul>
            <ul class="navbar-nav ms-auto">
            <a href="#/login" class="btn rounded-pill btn-primary py-2 px-4">Login</a>
            </ul>
            
        </div>
    </nav>
      `;
  }
}
  
customElements.define('app-bar', AppBar);
