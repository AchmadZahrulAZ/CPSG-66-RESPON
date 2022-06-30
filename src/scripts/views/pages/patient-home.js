const Home = {
  async render() {
    return `
    <div class="content" id="main-content">
      <hero-bar></hero-bar>
      <section id="services" class="services section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Pelayanan</h2>
            <p>RESPON memberikan beberapa pelayanan antara lain :</p>
          </div>
          
          <div class="row">
            <div class="col-xl-3 col-md-6 d-flex align-items-stretch">
              <div class="icon-box">
                <div class="icon"><i class="fa-solid fa-book-medical"></i></div>
                <h4><a href="">Pendaftaran Online</a></h4>
                <p>Pendaftaran Puskesmas dilakukan secara online tanpa perlu datang ke lokasi</p>
              </div>
            </div>
  
            <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div class="icon-box">
                <div class="icon"><i class="fa-solid fa-list-check"></i></div>
                <h4><a href="">Antrean Online</a></h4>
                <p>Dapat melihat antrean secara online</p>
              </div>
            </div>
  
            <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0">
              <div class="icon-box">
                <div class="icon"><i class="fa-solid fa-map-location-dot"></i></div>
                <h4><a href="">Maps Puskesmas</a></h4>
                <p>Melakukan pengecekan lokasi puskesmas yang dituju</p>
              </div>
            </div>
  
            <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0">
              <div class="icon-box">
                <div class="icon"><i class="fa-solid fa-hourglass-start"></i></div>
                <h4><a href="">Hemat Waktu</a></h4>
                <p>Dapat menghemat waktu dengan melakukan semua secara online</p>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
      
      <section id="how-to" class="how-to section-bg">
        <div class="container-fluid">
  
          <div class="row">
  
            <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
  
              <div class="content">
                <h3>Bagaimana cara menggunakan layanan <strong>RESPON</strong> ?</h3>
                
              </div>
              <br>
              
              <div class="accordion-list">
                <ul>
                  <li>
                    <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1"><span>01</span> Memasukan akun <i class="fa-solid fa-angle-down icon-show"></i><i class="fa-solid fa-angle-up icon-close"></i></a>
                    <div id="accordion-list-1" class="collapse show" data-bs-parent=".accordion-list">
                      <p>
                        Hal pertama yang perlu dilakukan adalah memasukan akun terlebih dahulu jika belum memiliki akun dapat melakukan pembuatan akun terlebih dahulu.
                      </p>
                    </div>
                  </li>
  
                  <li>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" class="collapsed"><span>02</span> Pilih Puskemas <i class="fa-solid fa-angle-down icon-show"></i><i class="fa-solid fa-angle-up icon-close"></i></a>
                    <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list">
                      <p>
                        Setelah memasukkan akun pasien dapat memilih dan mencari puskesmas yang akan dituju dengan klik pages Reservation pada navigasi bar diatas.
                      </p>
                    </div>
                  </li>
  
                  <li>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" class="collapsed"><span>03</span> Melakukan Pendaftaran <i class="fa-solid fa-angle-down icon-show"></i><i class="fa-solid fa-angle-up icon-close"></i></a>
                    <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list">
                      <p>
                        Setelah pasien memilih puskesmas yang dituju pasien dapat melakukan pendaftaran dengan mengisi data pasien yang bersangkutan dan dapat melakukan pengecekan nomor antrean setelahnya.
                      </p>
                    </div>
                  </li>
  
                </ul>
              </div>
  
            </div>
  
            <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img" style='background-image: url("./images/image1.jpg");'>&nbsp;</div>
          </div>
  
        </div>
      </section>
    </div>
    `;
  },

  async afterRender() {
    // 
  },
};

export default Home;
