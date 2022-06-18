const IsiDataPuskesmas = {
  async render() {
    return `
        <div class="container p-4 my-4 bg-light rounded-3">
        <h2 class="my-4 text-center">ISI DATA PUSKESMAS</h2>
        <form class="ps-5 mt-5">
            <div class="mb-3 row">
                <label for="namaPuskesmas" class="col-sm-2 col-form-label">Nama Puskesmas</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="namaPuskesmas">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="alamatPuskesmas" class="col-sm-2 col-form-label">Alamat Puskesmas</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="alamatPuskesmas">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="notelpPuskesmas" class="col-sm-2 col-form-label">No. Telp</label>
                <div class="col-sm-9">
                  <input type="number" class="form-control" id="notelpPuskesmas">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="linkMaps" class="col-sm-2 col-form-label">Link Maps</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="linkMaps">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="denahPuskesmas" class="col-sm-2 col-form-label">Upload Denah Puskesmas</label>
                <div class="col-sm-9">
                  <input type="file" class="form-control" id="denahPuskesmas">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="fotoPuskesmas" class="col-sm-2 col-form-label">Upload Foto Puskesmas</label>
                <div class="col-sm-9">
                  <input type="file" class="form-control" id="fotoPuskesmas">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="poliPuskesmas" class="col-sm-2 col-form-label">Poli yang Tersedia</label>
                <div class="col-sm-9">
                    <div id="poliContainer">
                        <input type="text" class="form-control mb-3" id="poliPuskesmas">
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-link" id="addPoli">Tambahkan Poli Baru</button>
                    </div>
                    
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary mt-3" disabled>Submit</button>
            </div>
            
        </form>
    </div>
        `;
  },

  async afterRender() {
    const poliContainer = document.getElementById('poliContainer');
    const addPoli = document.getElementById('addPoli');
    addPoli.addEventListener('click', () => {
      poliContainer.innerHTML += '<input type="text" class="form-control mb-3" id="poliPuskesmas">';
    });
  },
};

export default IsiDataPuskesmas;