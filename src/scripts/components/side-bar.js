class SideBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  
  render() {
    this.innerHTML = `
      <div class="bg-white" id="sidebar-wrapper">
      <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
              class="fas fa-user-secret me-2"></i>RESPON</div>
      <div class="list-group list-group-flush my-3">
          <a href="#/staffdashboard" class="list-group-item list-group-item-action bg-transparent second-text active">
              <i class="fas fa-tachometer-alt me-2"></i>Dashboard</a>
          <a href="#/staffantrian" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
              <i class="fas fa-shopping-cart me-2"></i>Data Antrian</a>        
          <a href="#/staffakun" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
              <i class="fas fa-project-diagram me-2"></i>Pengaturan Akun</a>
          <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
              <i class="fas fa-power-off me-2"></i>Logout</a>
      </div>
  </div>
        `;
  }
}
  
customElements.define('side-bar', SideBar);
