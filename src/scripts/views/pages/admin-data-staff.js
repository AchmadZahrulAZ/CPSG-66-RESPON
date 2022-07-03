import axios from 'axios';

const AdminDataStaff = {
  async render() {
    return `
    <div class="container">
    <table class="table table-light table-bordered table-hover">
      <thead class="table-warning">
        <tr>
          <th scope="col" class="text-center">ID</th>
          <th scope="col" class="text-center">NAMA</th>
          <th scope="col" class="text-center">USERNAME</th>
          <th scope="col" class="text-center">EMAIL</th>
          <th scope="col" class="text-center"></th>
        </tr>
      </thead>
      <tbody id="tes">

      </tbody>
    </table>
  </div>
      `;
  },

  async afterRender() {
    const res = await axios('https://respon-backend.vercel.app/staff/list');
    console.log(res.data[0]);
    let datalist = '';
    res.data.forEach((data) => {
      datalist += `
      <tbody>
        <tr>
          <th scope="row" class="text-center">${data.id}</th>
          <td class="text-center">${data.Nama}</td>
          <td class="text-center">${data.Username}</td>
          <td class="text-center">${data.Email}</td>
          <td class="d-flex justify-content-center">
            <button type="button" class="btn btn-warning">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
          </td>
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

export default AdminDataStaff;
