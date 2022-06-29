const StaffDataAntrian = {
  async render() {
    return `
    <div class="container shadow bg-light p-3 my-5 rounded-4">
    <h3 class="text-center mt-3 mb-5">ISI DATA PENDAFTARAN</h3>
            <form autocomplete="off" id="input-antrian">
                <div class="mb-3 row px-4">
                    <label for="Nomor Antrian" class="col-sm-5 col-form-label">Nomor Antrian</label>
                    <div class="col-sm-7">
                      <input type="text" class="form-control" name="nomorantrian" id="nomorantrian">
                    </div>
                </div>
                <div class="mb-3 row px-4">
                    <label for="Nama" class="col-sm-5 col-form-label">Nama</label>
                    <div class="col-sm-7">
                    <input type="text" class="form-control" name="nama" id="nama">
                    </div>
                </div>
                <div class="mb-3 row px-4">
                    <label for="Poli" class="col-sm-5 col-form-label">Poli</label>
                    <div class="col-sm-7">
                    <input type="text" class="form-control" name="poli" id="poli">
                    </div>
                </div>
                <div class="mb-3 row px-4">
                    <label for="Jenis Pembayaran" class="col-sm-5 col-form-label">Jenis Pembayaran</label>
                    <div class="col-sm-7">
                    <input type="text" class="form-control" name="jenispembayaran" id="jenispembayaran">
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" value="submit" class="btn btn-primary mt-3 px-5 fw-bold">Daftar</button>
                </div>
            </form>
      </div>

      <div class="container">
        <table class="table table-light table-bordered table-hover id="antrian">
          <thead class="table-warning">
            <tr>
              <th scope="col">Nomor Antrian</th>
              <th scope="col">Nama</th>
              <th scope="col">Poli</th>
              <th scope="col">Jenis</th>
              <th scope="col" class="text-center"></th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
      `;
  },

  async afterRender() {
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
