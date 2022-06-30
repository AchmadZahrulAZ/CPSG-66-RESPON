const About = {
  async render() {
    return `
    <div class="content" id="main-content">

      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <h2>Tentang Kami</h2>
          </div>
          <div class="row content">
            <div class="col-lg-6">
              <img class="img-fluid" src="./images/logo/respon-logo1.png" alt="Respon Logo" />
            </div>
            <div class="col-lg-6 pt-3">
              <p>
                RESPON atau Reservasi Puskesmas Online merupakan aplikasi yang dapat membantu dan memudahkan 
                para pasien puskesmas dalam melakukan pengambilan nomor antrean. Platform ini merupakan implementasi
                dari survei yang team kami lakukan dan banyak masyarakat yang memiliki pendapat bahwa untuk mendapatkan
                nomor antrean di puskesmas mengharuskan calon pasien datang sedari pagi dan menunggu lama untuk dipanggil saat pengecekan.
                <br>
                DIharapkan dengan adanya RESPON dapat memudahkan masyarakat dalam pengambilan nomor antrean dan dapat memantau nomor antrean
                secara daring dari rumah tanpa harus menunggu lama di puskesmas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" class="team section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Team Pengembang</h2>
          </div>
          <div class="row">
            <div class="col-lg-6 mt-4">
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img src="./images/team/zahrul2.jpg" class="img-fluid" alt="zahrul">
                </div>
                <div class="member-info">
                  <h4>Achmad Zahrul Ali Zadan</h4>
                  <span>Back-End Developer</span>
                  <div class="social">
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://github.com/AchmadZahrulAZ"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/achmadzahrulalizadan/"><i class="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
           </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
              <div class="pic">
                <img src="./images/team/ilham2.jpg" class="img-fluid" alt="ilham">
              </div>
              <div class="member-info">
                <h4>Ilham Oktavian</h4>
                <span>Back-End Developer</span>
                <div class="social">
                  <a href="https://www.instagram.com/oktavianilham/"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://github.com/Ilhamokta74"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/ilham-oktavian-580301222/"><i class="fa-brands fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <img src="./images/team/bagas2.jpg" class="img-fluid" alt="bagas">
              </div>
              <div class="member-info">
                <h4>Bagas Kurnia Ramadhan</h4>
                <span>Front-End Developer</span>
                <div class="social">
                  <a href="instagram.com/bagaskurniarmdhn"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://github.com/bagaskurniarmdhn"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/bagaskurniaramadhan/"><i class="fa-brands fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <img src="./images/team/wahyu2.jpg" class="img-fluid" alt="wahyu">
              </div>
              <div class="member-info">
                <h4>Ahmad Wahyu Pratama</h4>
                <span>Front-End Developer</span>
                <div class="social">
                  <a href="https://www.instagram.com/ah.wahyu_/"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://github.com/ahmadWahyu7"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/ahmad-wahyu-pratama-a735a3221/"><i class="fa-brands fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
    `;
  },
   
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
   
export default About;
