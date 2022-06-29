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
            <a href="#/staffhome" class="list-group-item list-group-item-action bg-transparent second-text active"><i class="fa-solid fa-pager me-2"></i>Dashboard</a>
            <a href="#/staffdataantrian" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i class="fa-solid fa-hospital-user me-1"></i>Data Antrian</a>
            <a href="#/staffinformasipuskesmas" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i class="fa-solid fa-file-medical me-2"></i>Informasi Puskesmas</a>
            <a href="#/staffkritikdansaran" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i class="fa-solid fa-clipboard-user me-2"></i>Kritik dan Saran</a>
            <a href="#/stafffaq" class="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i class="fa-solid fa-clipboard-user me-2"></i>FAQ</a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i class="fa-solid fa-power-off me-2"></i>Logout</a>
        </div>
    `;
  }
}

customElements.define('side-bar', SideBar);
