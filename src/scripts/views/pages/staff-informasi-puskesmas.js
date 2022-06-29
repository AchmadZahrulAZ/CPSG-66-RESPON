const StaffInformasiPuskesmas = {
  async render() {
    return `
    <div class="container">
    <table class="table table-light table-bordered table-hover">
      <thead class="table-warning">
        <tr>
          <th scope="col">Nomor Antrian</th>
          <th scope="col">Nama</th>
          <th scope="col">Poli</th>
          <th scope="col">Jenis</th>
          <th scope="col" class="text-center">Hapus Antrian</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">A001</th>
          <td>Mark</td>
          <td>Anak</td>
          <td>BPJS</td>
          <td class="d-flex justify-content-center"><button type="button" class="btn btn-danger">Hapus Antrian</button></td>
        </tr>
        <tr>
          <th scope="row">U002</th>
          <td>Jacob</td>
          <td>Umum</td>
          <td>Tunai</td>
          <td class="d-flex justify-content-center"><button type="button" class="btn btn-danger">Hapus Antrian</button></td>
        </tr>
        <tr>
          <th scope="row">G003</th>
          <td>Larry</td>
          <td>Gigi</td>
          <td>BPJS</td>
          <td class="d-flex justify-content-center"><button type="button" class="btn btn-danger">Hapus Antrian</button></td>
        </tr>
      </tbody>
    </table>
  </div>
      `;
  },

  async afterRender() {
    // test
  },
};

export default StaffInformasiPuskesmas;
