class Footbar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  
  render() {
    this.innerHTML = `
    <div class="container py-3">
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row">
      <div class="col-12 col-md">
        <img class="mb-2" src="./images/logo/respon-logo2.png" alt="" width="50%">
      </div>
      <div class="col-6 col-md">
        <h5>Navigation</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Home</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Reservation</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">About</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Contact</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Reservation</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">List Puskesmas</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Login</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Contact</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">GitHub</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Instagram</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Facebook</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    </footer>
    </div>
      `;
  }
}
  
customElements.define('footer-bar', Footbar);
