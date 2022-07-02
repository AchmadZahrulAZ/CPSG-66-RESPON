import { puskesmasNoData, puskesmasWithData } from '../templates/template-creator';

const StaffHome = {
  async render() {
    return `
    <div class="p-4 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5 text-center">
            <h1 class="display-6 fw-bold">Halo Achmad Zahrul</h1>
            <p class="fs-4">Selamat datang di dashboard staff RESPON(Reservasi Puskesmas Online)</p>
        </div>
    </div>
    <div class="container d-flex justify-content-center">
      <button id="ya" class="btn btn-primary mt-3">ya</button>
      <button id="tidak" class="btn btn-danger mt-3">tidak</button>
    </div>
    <div class="p-4 mb-4 bg-light rounded-3">
        <div class="container-fluid">
          <div id="puskesmas-data" class="contoh"></div>
        </div>
    </div>
    
    `;
  },

  async afterRender() {
    /* 
    buat variable yang menampung data puskesmas
    buat percabangan if apakah data tersedia
    - jika ya maka tampilkan template data puskesmas
    - jika tidak maka tampilkan template data kosong

    const puskesmasData = await .... //ambil data dari database
    const puskesmasContainer  = document.querySelector('#puskesmas-data');
    if (puskesmasData.length > 0 ??) { //kondisi jika data puskesmas ada
      puskesmasContainer.innerHTML += .... // tampilan yang ada datanya
    } else {
      puskesmasContainer.innerHTML += .... // tampilan belum ada data
    }
    */
    const puskesmasContainer = document.querySelector('#puskesmas-data'); 
    const yes = document.querySelector('#ya');
    const no = document.querySelector('#tidak');
    yes.addEventListener('click', () => {
      puskesmasContainer.innerHTML = '';
      puskesmasContainer.innerHTML += puskesmasWithData;
    });
    no.addEventListener('click', () => {
      puskesmasContainer.innerHTML = '';
      puskesmasContainer.innerHTML += puskesmasNoData;
    });
  },
};

export default StaffHome;
