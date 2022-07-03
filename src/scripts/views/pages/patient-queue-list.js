import PuskesmasSource from '../../data/puskesmas-source';
import { tablePasien } from '../templates/template-creator';

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
            <tbody id="tableList"></tbody>
        </table>
    </div>
</div>
    </div>
    `;
  },

  async afterRender() {
    const list = document.querySelector('#list');
    list.classList.add('active');

    const pasienList = await PuskesmasSource.listPasien();
    const tableContainer = document.getElementById('tableList');
    pasienList.forEach((pasien) => {
      tableContainer.innerHTML += tablePasien(pasien);
    });
  },
};

export default QueueList;