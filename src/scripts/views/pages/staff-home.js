const StaffHome = {
  async render() {
    return `
    <div class="p-4 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5 text-center">
            <h1 class="display-6 fw-bold">Halo Achmad Zahrul</h1>
            <p class="fs-4">Selamat datang di dashboard staff RESPON(Reservasi Puskesmas Online)</p>
        </div>
    </div>
    
    `;
  },

  async afterRender() {
    // test
  },
};

export default StaffHome;
