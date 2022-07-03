import PuskesmasSource from '../../data/puskesmas-source';
import { detailPuskesmas } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="content" id="main-content">
        <section id="detail" class="detail">
        <div class="container">
          <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Puskesmas Rancaekek</h1>
              <button class="btn btn-primary btn-lg" type="button"><a href="#/pendaftaran">Lanjut Daftar</a></button>
          </div>
          </div>

          <div class="row">
          <div class="row content">
              <div class="col-lg-6">
              <h2>Informasi Puskesmas</h2>
              <div class="row my-4 ps-5">
                  <table class="table-borderless">
                  <tbody>
                      <tr>
                      <td style="width:30%"><strong>Nama Puskesmas</strong></td>
                      <td>Puskesmas Rancaekek</td>
                      </tr>
                      <tr>
                      <td><strong>Alamat</strong></td>
                      <td>Jl. Rancaekek No.99, Rancaekek Wetan, Kec. Rancaekek, Kabupaten Sumedang, Jawa Barat 45364</td>
                      </tr>
                      <tr>
                      <td><strong>No. Telepon</strong></td>
                      <td>(022) 7799009</td>
                      </tr>
                  </tbody>
                  </table>
              </div>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4253352387773!2d107.75805871414524!3d-6.9590490700659915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c457bdc575f1%3A0x68b4a76902c9793b!2sPuskesmas%20RANCAEKEK!5e0!3m2!1sid!2sid!4v1656837808847!5m2!1sid!2sid" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
              </div>
          </div>

          <div class="row content">
              <div class="col-lg-6 mt-5">
              <h2>Kouta Hari Ini</h2>
              <div class="row my-4 ps-5">
                  <table class="table-borderless">
                  <tbody>
                      <tr>
                      <td style="width:30%"><strong>Poli Umum</strong></td>
                      <td>10 Pasien</td>
                      </tr>
                      <tr>
                      <td><strong>Poli Gigi</strong></td>
                      <td>10 Pasien</td>
                      </tr>
                      <tr>
                      <td><strong>Poli Lansia</strong></td>
                      <td>100 Pasien</td>
                      </tr>
                  </tbody>
                  </table>
              </div>
              </div>
          
              <div class="col-lg-6 pt-4 pt-lg-0 mt-5">
              <h2>Antrean Berlangsung</h2>
              <div class="row my-4 ps-5">
                  <table class="table-borderless">
                  <tbody>
                      <tr>
                      <td style="width:40%"><strong>Sedang Dilayani</strong></td>
                      <td style="width:30%">A 005</td>
                      <td style="width:30%">B 001</td>
                      </tr>
                  </tbody>
                  </table>

                  <table class="table-borderless py-3">
                  <tbody>
                      <tr>
                      <td style="width:40%"><strong>Selanjutnya</strong></td>
                      <td style="width:30%">A 005</td>
                      <td style="width:30%">B 001</td>
                      </tr>
                  </tbody>
                  </table>
              </div>
              </div>
          </div>
          </div>
      </div>
        </section>
    </div>
    `;
  },

  async afterRender() {
    // const puskesmasList = await PuskesmasSource.listPuskesmas();
    // const detailContainer = document.getElementById('detail');
    // detailContainer.innerHTML = detailPuskesmas();
  },
};

export default Detail;
