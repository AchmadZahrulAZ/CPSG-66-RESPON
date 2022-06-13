const AdminDataAdmin = {
  async render() {
    return `
      <div class="p-4 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5 text-center">
              <h1 class="display-6 fw-bold">Data Admin</h1>
              <p class="fs-4">test</p>
          </div>
      </div>
      `;
  },

  async afterRender() {
    // test
  },
};

export default AdminDataAdmin;
