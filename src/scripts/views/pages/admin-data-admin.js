import axios from 'axios';

const AdminDataAdmin = {
  async render() {
    return `
      <div class="container">
        <table class="table table-light table-bordered table-hover">
          <thead class="table-warning">
            <tr>
              <th scope="col" class="text-center">ID</th>
              <th scope="col" class="text-center">NAMA</th>
              <th scope="col" class="text-center">NIK</th>
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
    // ini menampilkan seluruh data API
    const res = await axios('https://respon-backend.vercel.app/user/list');
    console.log(res);
    console.log(res.data[0]);
    let datalist = '';
    res.data.forEach((data) => {
      datalist += `
      <tbody>
        <tr>
          <th scope="row" class="text-center">${data.id}</th>
          <td class="text-center">${data.nama}</td>
          <td class="text-center">${data.nik}</td>
          <td class="text-center">${data.email}</td>
          <td class="d-flex justify-content-center">
            <button type="button" onClick="" class="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter">Edit</button> 
            <button type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    `;
      document.querySelector('#tes').innerHTML = datalist;
    });
  },
};

export default AdminDataAdmin;
