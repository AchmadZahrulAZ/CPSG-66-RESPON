const Detail = {
  async render() {
    return `
    <div class="content" id="main-content">
        <section id="detail" class="detail">
            <div class="container">
            <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Custom jumbotron</h1>
              <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
              <button class="btn btn-primary btn-lg" type="button">Example button</button>
            </div>
          </div>
          <div class="row">

          <div class="col-lg-6 d-flex align-items-stretch">
            <div class="info">
              <h2>Informasi Puskesmas</h2>
              <div class="row my-4 px-5">
            <div class="col-sm-5">Nama Puskesmas</div>
            <div class="col-sm-1">:</div>
            <div class="col-sm-6">Puskesmas Bandung</div>
        </div> 
            </div>
  
          </div>
  
          <div class="col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5369.666762885984!2d106.84225004223069!3d-6.389876150948072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebf25812f2e9%3A0xe2482d75d1ee67b4!2sUPTD%20Puskesmas%20Sukmajaya!5e0!3m2!1sid!2sid!4v1655702322202!5m2!1sid!2sid" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
          </div>

          <div class="col-lg-6 py-5 d-flex align-items-stretch">
            <div class="info">
              <h2>Kouta Hari Ini</h2>
              <div class="px-5">
              <p>Poli Mata</p>
              <p>Poli Gigi</p>
              <p>Poli Umum</p>
              </div>
            </div>

            <div class="col-lg-6 mt-5 mt-lg-0 d-flex align-items-stretch">
            <div class="info">
              <h2>Informasi Puskesmas</h2>
              <div class="px-5">
              <p>Nama puskesmas</p>
              <p>Alamat</p>
              <p>No. Telp</p>
              </div>
            </div>
  
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

export default Detail;
