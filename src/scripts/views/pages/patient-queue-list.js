const QueueList = {
  async render() {
    return `
    <div class="container my-5 box">
        <nav class="nav nav-pills nav-justified">
            <a id="daftar" class="nav-link border border-color fw-bold" href="#/pendaftaran">Pendaftaran</a>
            <a id="list" class="nav-link border border-color fw-bold" href="#/list-antrian">List Antrian</a>
        </nav>
    </div>
    <div class="container bg-light p-3 my-5 rounded-4">
    <div class="bg-light rounded p-3">
    <div class="table-responsive">
        <table class="table table-hover text-center">
            <thead>
                <tr>
                    <th style="width:20%">NO ANTREAN</th>
                    <th>NAMA PASIEN</th>
                    <th>POLI</th>
                    <th>JENIS PEMBAYARAN</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <td>John</td>
                    <td>Umum</td>
                    <td>BPJS</td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>Mark</td>
                    <td>Gigi</td>
                    <td>Tunai</td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>Jacob</td>
                    <td>Lansia</td>
                    <td>BPJS</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    </div>
    `;
  },

  async afterRender() {
    const list = document.querySelector('#list');
    list.classList.add('active');
  },
};

export default QueueList;