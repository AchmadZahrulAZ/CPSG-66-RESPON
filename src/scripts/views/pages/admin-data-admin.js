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

      <div class="container shadow bg-light p-3 my-5 rounded-4">
        <h3 class="text-center mt-3 mb-5">TAMBAH DATA ADMIN</h3>
          <form autocomplete="off" id="isi-data-admin">
              <div class="mb-3 row px-4">
                  <label for="Nama" class="col-sm-5 col-form-label">NAMA</label>
                  <div class="col-sm-7">
                  <input type="text" class="form-control" name="nama" id="nama">
                  </div>
              </div>
              <div class="mb-3 row px-4">
                  <label for="Nik" class="col-sm-5 col-form-label">NIK</label>
                  <div class="col-sm-7">
                  <input type="text" class="form-control" name="nik" id="nik">
                  </div>
              </div>
              <div class="mb-3 row px-4">
                  <label for="Email" class="col-sm-5 col-form-label">EMAIL</label>
                  <div class="col-sm-7">
                  <input type="text" class="form-control" name="email" id="email">
                  </div>
              </div>
              <div class="d-flex justify-content-center">
                  <button type="submit" value="submit" class="btn btn-primary mt-3 px-5 fw-bold">Daftar</button>
              </div>
          </form>
      </div>

      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
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
