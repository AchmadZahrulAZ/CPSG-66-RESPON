import axios from 'axios';

const StaffDataAntrian = {
  async render() {
    return `
      <!-- Tersambung API -->
      <div class="container">
          <div class="table-responsive">
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
      </div>
      `;
  },

  async afterRender() {
    const res = await axios('https://respon-backend.vercel.app/pasien/list');
    console.log(res.data[0]);
    let datalist = '';
    res.data.forEach((data) => {
      datalist += `
      <tbody>
        <tr>
          <th scope="row" class="text-center">${data.id}</th>
          <td class="text-center">${data.NamaPasien}</td>
          <td class="text-center">${data.Poli}</td>
          <td class="text-center">${data.Pembayaran}</td>
          <td class="d-flex justify-content-center"><button id="hapus" type="button" class="btn btn-danger">Hapus Antrian</button></td>
        </tr>
      </tbody>
  `;
      document.querySelector('#tes').innerHTML = datalist;
      document.getElementById('hapus').addEventListener('click', () => {
        axios.delete(`http://localhost:3000/pasien/hapus?id=${data.id}`);
      });
    });
    let selectedRow = null;

    const antrian = document.getElementById('nomorantrian');
    const nama = document.getElementById('nama');
    const poli = document.getElementById('poli');
    const jenispembayaran = document.getElementById('jenispembayaran');
    const form = document.getElementById('input-antrian');

    function readFormData() {
      var formData = {};
      formData['antrian'] = antrian.value;
      formData['nama'] = nama.value;
      formData['poli'] = poli.value;
      formData['jenispembayaran'] = jenispembayaran.value;
      return formData;
    }

    function resetForm() {
      antrian.value = '';
      nama.value = '';
      poli.value = '';
      jenispembayaran.value = '';
    }

    function insertNewRecord() {
      let formData = readFormData();
      let table = document.getElementsByTagName('tbody')[0];
      let newRow = table.insertRow(table.length);
      let cell1 = newRow.insertCell(0);
      cell1.innerHTML = formData.antrian;
      let cell2 = newRow.insertCell(1);
      cell2.innerHTML = formData.nama;
      let cell3 = newRow.insertCell(2);
      cell3.innerHTML = formData.poli;
      let cell4 = newRow.insertCell(3);
      cell4.innerHTML = formData.jenispembayaran;
      let cell5 = newRow.insertCell(4);
      cell5.innerHTML = `<button onClick="onEdit()">Edit</a>
                          <button onClick="onDelete()">Delete</a>`;
    }

    function updateRecord(formData) {
      selectedRow.cells[0].innerHTML = formData.antrian;
      selectedRow.cells[1].innerHTML = formData.nama;
      selectedRow.cells[2].innerHTML = formData.poli;
      selectedRow.cells[3].innerHTML = formData.jenispembayaran;
    }

    function onEdit(td) {
      selectedRow = td.parentElement.parentElement;
      antrian.value = selectedRow.cells[0].innerHTML;
      nama.value = selectedRow.cells[1].innerHTML;
      poli.value = selectedRow.cells[2].innerHTML;
      jenispembayaran.value = selectedRow.cells[3].innerHTML;
    }

    form.addEventListener('submit', function (e) {
      let formData = readFormData();
      e.preventDefault();
      if (selectedRow == null) insertNewRecord(formData);
      else updateRecord(formData);
      resetForm();
    });
  },
};

export default StaffDataAntrian;
