import axios from 'axios';

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
      <tbody id="tes">

      </tbody>
    </table>
  </div>
      `;
  },

  async afterRender() {
    const res = await axios('https://respon-backend.vercel.app/pasien/list')
    console.log(res.data[0])
    let datalist = '';
    res.data.forEach((data) => {
      datalist += `
      <tbody>
        <tr>
          <th scope="row">${data.id}</th>
          <td>${data.name}</td>
          <td>${data.poli}</td>
          <td>${data.tax}</td>
          <td class="d-flex justify-content-center"><button id="hapus" type="button" class="btn btn-danger">Hapus Antrian</button></td>
        </tr>
      </tbody>
  `;
  document.querySelector('#tes').innerHTML = datalist;
  // document.getElementById('hapus').addEventListener('click', () => {
  //   axios.delete(`http://localhost:3000/pasien/hapus?id=${data.id}`)
  // })
  });
  },
};

export default StaffInformasiPuskesmas;
