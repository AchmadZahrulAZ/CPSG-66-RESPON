import axios from 'axios';

const AdminDataPasien = {
  async render() {
    return `
    <div class="container">
    <table class="table table-light table-bordered table-hover">
      <thead class="table-warning">
        <tr>
          <th scope="col" class="text-center">Nomor Antrian</th>
          <th scope="col" class="text-center">Nama</th>
          <th scope="col" class="text-center">Poli</th>
          <th scope="col" class="text-center">Jenis</th>
          <th scope="col" class="text-center">Hapus Antrian</th>
        </tr>
      </thead>
      <tbody id="tes">

      </tbody>
    </table>
  </div>
      `;
  },

  async afterRender() {
    const res = await axios('https://respon-backend.vercel.app/pasien/list');
    let datalist = '';
    res.data.forEach((data) => {
      datalist += `
      <tbody>
        <tr>
          <th scope="row" class="text-center">${data.id}</th>
          <td class="text-center">${data.name}</td>
          <td class="text-center">${data.poli}</td>
          <td class="text-center">${data.tax}</td>
          <td class="d-flex justify-content-center">
            <button type="button" class="btn btn-warning">Edit</button>
            <button type="button" class="btn btn-danger" id="delete">Delete</button>
          </td>
        </tr>
      </tbody>
      `;
      document.querySelector('#tes').innerHTML = datalist;
    });
  },
};

export default AdminDataPasien;
