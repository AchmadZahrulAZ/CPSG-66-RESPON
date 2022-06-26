class heroBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  
  render() {
    this.innerHTML = `
    <section id="hero" class="d-flex align-items-center">

      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>Reservasi Puskesmas Online</h1>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, consequuntur.</h2>
            <div class="d-flex justify-content-center justify-content-lg-start">
              <a href="#/login" class="btn rounded-pill btn-primary py-2 px-5 d-none d-lg-block">Login</a>
            </div>
          </div>
          
        </div>
      </div>
  
    </section>
    `;
  }
}
  
customElements.define('hero-bar', heroBar);
