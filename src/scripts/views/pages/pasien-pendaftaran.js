const Pendaftaran = {
  async render() {
    return `
    <div class="container my-5 box">
        <nav class="nav nav-pills nav-justified">
            <a id="daftar" class="nav-link border border-primary" href="#/pendaftaran">Pendaftaran</a>
            <a id="list" class="nav-link border border-primary" href="#/list-antrian">List Antrian</a>
        </nav>
    </div>
    <div class="container bg-light p-3 my-5 rounded-4">
        <div class="row">
            <div class="col-sm-6">
                <form>
                    <div class="mb-3 row px-4">
                        <label for="namaPuskesmas" class="col-sm-5 col-form-label">Nama Pasien</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="namaPuskesmas">
                        </div>
                    </div>
                    <div class="mb-3 row px-4">
                        <label for="alamatPuskesmas" class="col-sm-5 col-form-label">No. NIK</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="alamatPuskesmas">
                        </div>
                    </div>
                    <div class="mb-3 row px-4">
                        <label for="notelpPuskesmas" class="col-sm-5 col-form-label">Alamat</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="notelpPuskesmas">
                        </div>
                    </div>
                    <div class="mb-3 row px-4">
                        <label for="linkMaps" class="col-sm-5 col-form-label">No.Telepon</label>
                        <div class="col-sm-7">
                          <input type="number" class="form-control" id="linkMaps">
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-sm-6">
                <form>
                    <div class="mb-3 row px-4">
                        <label for="namaPuskesmas" class="col-sm-5 col-form-label">Pilih Pembayaran</label>
                        <div class="col-sm-7">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Pembayaran</option>
                                <option value="1">BPJS</option>
                                <option value="2">Tunai</option>
                              </select>
                        </div>
                    </div>
                    <div class="mb-3 row px-4">
                        <label for="alamatPuskesmas" class="col-sm-5 col-form-label">Pilih Poli</label>
                        <div class="col-sm-7">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Poli Puskesmas</option>
                                <option value="1">Umum</option>
                                <option value="2">Lansia</option>
                                <option value="3">Gigi</option>
                              </select>
                        </div>
                    </div>
                    <div class="mb-3 row px-4">
                        <label for="notelpPuskesmas" class="col-sm-5 col-form-label">Pilih Jadwal</label>
                        <div class="col-sm-7">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>jadwal puskesmas</option>
                                <option value="1">09:00 Pagi</option>
                                <option value="2">13.00 Siang</option>
                                <option value="3">contoh lain</option>
                              </select>
                        </div>
                    </div>
                    <div class="mb-3 row px-4">
                        <label for="linkMaps" class="col-sm-5 col-form-label">Pilih Lokasi</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control" id="linkMaps">
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary mt-3 px-5">Daftar</button>
        </div>
    </div>
    `;
  },
  
  async afterRender() {
    const daftar = document.querySelector('#daftar');
    daftar.classList.add('active');
  },
};
  
export default Pendaftaran;
