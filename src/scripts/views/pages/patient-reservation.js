const Reservation = {
  async render() {
    return `
    <div class="content" id="main-content">
        <section class="reservation section-bg">
            <div class="row height d-flex justify-content-center align-items-center">

                <div class="col-md-8">
                    <div class="section-title">
                        <h2>Cari Puskesmas</h2>
                    </div>
                    <div class="search">
                        <i class="fa fa-search"></i>
                        <input type="text" class="form-control" placeholder="Cari Puskesmas">
                        <button class="btn">Search</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="list-puskesmas">
            <div class="container">
                <h3 class="section-title">DAFTAR PUSKESMAS</h3>
                <div class="row g-4">
                    <div class="col-md-6 col-lg-4">
                        <div class="puskesmas-item rounded overflow-hidden">
                            <img class="img-fluid" src="./images/image3.jpg" alt="">
                            <div class="position-relative p-4 pt-0">
                                <div class="puskesmas-icon">
                                    <i class="fa-solid fa-hospital fa-3x"></i>
                                </div>
                                <h4 class="mb-3">Puskesmas A</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                <a class="small fw-medium" href="#/detail-puskesmas">Lanjut daftar<i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="puskesmas-item rounded overflow-hidden">
                            <img class="img-fluid" src="./images/image3.jpg" alt="">
                            <div class="position-relative p-4 pt-0">
                                <div class="puskesmas-icon">
                                    <i class="fa-solid fa-hospital fa-3x"></i>
                                </div>
                                <h4 class="mb-3">Puskesmas B</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                <a class="small fw-medium" href="">Lanjut Daftar<i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="puskesmas-item rounded overflow-hidden">
                            <img class="img-fluid" src="./images/image3.jpg" alt="">
                            <div class="position-relative p-4 pt-0">
                                <div class="puskesmas-icon">
                                    <i class="fa-solid fa-hospital fa-3x"></i>
                                </div>
                                <h4 class="mb-3">Puskesmas C</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                <a class="small fw-medium" href="">Lanjut Daftar<i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="puskesmas-item rounded overflow-hidden">
                            <img class="img-fluid" src="./images/image3.jpg" alt="">
                            <div class="position-relative p-4 pt-0">
                                <div class="puskesmas-icon">
                                    <i class="fa-solid fa-hospital fa-3x"></i>
                                </div>
                                <h4 class="mb-3">Puskesmas D</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                <a class="small fw-medium" href="">Lanjut Daftar<i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="puskesmas-item rounded overflow-hidden">
                            <img class="img-fluid" src="./images/image3.jpg" alt="">
                            <div class="position-relative p-4 pt-0">
                                <div class="puskesmas-icon">
                                    <i class="fa-solid fa-hospital fa-3x"></i>
                                </div>
                                <h4 class="mb-3">Puskesmas E</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                <a class="small fw-medium" href="">Lanjut Daftar<i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="puskesmas-item rounded overflow-hidden">
                            <img class="img-fluid" src="./images/image3.jpg" alt="">
                            <div class="position-relative p-4 pt-0">
                                <div class="puskesmas-icon">
                                    <i class="fa-solid fa-hospital fa-3x"></i>
                                </div>
                                <h4 class="mb-3">Puskesmas F</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                <a class="small fw-medium" href="">Lanjut Daftar<i class="fa fa-arrow-right ms-2"></i></a>
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
     
export default Reservation;
