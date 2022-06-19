const StaffKritikDanSaran = {
  async render() {
    return `
      <div class="p-4 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5 text-center">
              <h1 class="display-6 fw-bold">Kritik dan Saran</h1>
              <p class="fs-4">test</p>
          </div>
          <a href="https://chat.whatsapp.com/IGJpSJZJmMp43H4qLDr8nM"><i class="fa-brands fa-whatsapp"></i></a>
      </div>
      `;
  },

  async afterRender() {
    // test
  },
};

export default StaffKritikDanSaran;
