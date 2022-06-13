class SideBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
          <img src="logo/respon-logo1.png" alt="RESPON LOGO">
        </div>
        <div class="list-group list-group-flush my-3">
            <a href="#/adminhome" class="list-group-item list-group-item-action bg-transparent second-text active"><i class="fa-solid fa-pager me-2"></i>Dashboard</a>
            <a href="#/admindatapasien" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i class="fa-solid fa-hospital-user me-1"></i>Data Pasien</a>
            <a href="#/admindatastaff" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i class="fa-solid fa-file-medical me-2"></i>Data Staff</a>
            <a href="#/admindataadmin" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i class="fa-solid fa-clipboard-user me-2"></i>Data Admin</a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i class="fa-solid fa-power-off me-2"></i>Logout</a>
        </div>
    `;
  }
}

customElements.define('side-bar', SideBar);
