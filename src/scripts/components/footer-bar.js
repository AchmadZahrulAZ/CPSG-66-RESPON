class Footbar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  
  render() {
    this.innerHTML = `
    <footer class="py-4 pt-lg-5">
      <div class="container">
        <div class="row border-top border-top-secondary pt-7">
          <div class="col-lg-3 col-md-6 mb-4 mb-md-6 mb-lg-0 mb-sm-2 order-1 order-md-1 order-lg-1">
            <img class="mb-4" src="./images/logo/respon-logo2.png" width="150" alt="Respon Logo" />
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 order-3 order-md-3 order-lg-2">
            <p class="fs-2 mb-lg-4">Navigasi</p>
            <ul class="list-unstyled mb-0">
              <li class="mb-1"><a class="link-secondary text-decoration-none" href="#/beranda">Beranda</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" href="#/reservasi">Reservasi</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" href="#/tentang-kami">Tentang Kami</a></li>
              <li class="mb-1"><a class="link-secondary text-decoration-none" href="#/kontak">Kontak</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 order-4 order-md-4 order-lg-3">
            <p class="fs-2 mb-lg-4">Alamat</p>
            <p>Jl. Batik Kumeli No.50, Sukaluyu,
            Kec. Cibeunying Kaler, Kota Bandung
            Jawa Barat 40123
            </p>
          </div>
          <div class="col-lg-3 col-md-6 col-6 mb-4 mb-lg-0 order-2 order-md-2 order-lg-4">
            <p class="fs-3 mb-lg-2">Pendaftaran puskesmas tanpa perlu datang ke puskesmas</p>
            <button class="btn rounded-pill btn-primary py-2 px-5"><a href="#/masuk">Masuk</a></button>
          </div>
        </div>
      </div>
      <p class="fs-6 text-center mt-5">Copyright &copy; 2022 by <strong>RESPON</strong></p>
    </footer>
    `;
  }
}
  
customElements.define('footer-bar', Footbar);
