const StaffInformasiPuskesmas = {
  async render() {
    return `
      <div class="p-4 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5 text-center">
              <h1 class="display-6 fw-bold">Informasi Puskesmas</h1>
              <p class="fs-4">test</p>
          </div>
      </div>
      <div class="content" id="main-content">
      `;
  },

  async afterRender() {
    // test
  },
};

export default StaffInformasiPuskesmas;
