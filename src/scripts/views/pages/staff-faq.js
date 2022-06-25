const StaffFaq = {
  async render() {
    return `
      <section id="how-to" class="how-to section-bg">
        <div class="container-fluid" data-aos="fade-up">
          <div class="row"> 
            <div class="d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div class="content text-center">
                <h3>Contoh <strong>Judul</strong></h3>
                <p>
                  contoh penjelasan judul
                </p>
              </div>
  
              <div class="accordion-list">
                <ul>
                  <li>
                    <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1"><span>01</span> Bagaimana cara menghapus antrian pasien?<i class="fa-solid fa-angle-down icon-show"></i><i class="fa-solid fa-angle-up icon-close"></i></a>
                    <div id="accordion-list-1" class="collapse show" data-bs-parent=".accordion-list">
                      <p>
                        Cara untuk menghapus data antrian <br>
                        adalah sebagai berikut <br>
                        oke <br>
                      </p>
                    </div>
                  </li>
                  <li>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" class="collapsed"><span>02</span> Bagaimana cara mengubah data puskesmas? <i class="fa-solid fa-angle-down icon-show"></i><i class="fa-solid fa-angle-up icon-close"></i></a>
                    <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list">
                      <p>
                        contoh 2
                      </p>
                    </div>
                  </li>
                  <li>
                    <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" class="collapsed"><span>03</span> Bagaimana jika ingin menambah data pasien ke antrian? <i class="fa-solid fa-angle-down icon-show"></i><i class="fa-solid fa-angle-up icon-close"></i></a>
                    <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list">
                      <p>
                        contoh 3
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    // test
  },
};

export default StaffFaq;
