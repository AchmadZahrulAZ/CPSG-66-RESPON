const ListAntrian = {
  async render() {
    return `
    <div class="container my-5 box">
        <nav class="nav nav-pills nav-justified">
            <a id="daftar" class="nav-link border border-primary" href="#/pendaftaran">Pendaftaran</a>
            <a id="list" class="nav-link border border-primary" href="#/list-antrian">List Antrian</a>
        </nav>
    </div>
    <div class="container bg-light p-3 my-5 rounded-4">
        <div class="text-center p-5"><h1> ini adalah list antrian </h1></div>
    </div>
    `;
  },

  async afterRender() {
    const list = document.querySelector('#list');
    list.classList.add('active');
  },
};

export default ListAntrian;