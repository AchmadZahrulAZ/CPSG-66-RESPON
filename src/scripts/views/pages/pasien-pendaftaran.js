const Pendaftaran = {
  async render() {
    return `
    <div class="container my-5 box">
        <nav class="nav nav-pills nav-justified">
            <a class="nav-link active" aria-current="page" href="#">Pendaftaran</a>
            <a class="nav-link bg-white" href="#">List Antrian</a>
        </nav>
    </div>
    <div class="container content-utama bg-light p-3 rounded-4">
        <div class="row">
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
        </div>
        <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary mt-3" disabled>Submit</button>
        </div>
    </div>
    <div class="container my-5">
        <nav class="justify-content-center">
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
              <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                <h1>contoh aja sih ini mah</h1>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                <h2>ini hal hal</h2>
            </div>
          </div>
    </div>
    `;
  },
  
  async afterRender() {
    //
  },
};
  
export default Pendaftaran;
