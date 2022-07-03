import PuskesmasSource from '../../data/puskesmas-source';
import { puskesmasCard } from '../templates/template-creator';

const Reservation = {
  async render() {
    return `
    <div class="content" id="main-content">
        <section class="reservation section-bg">
            <div class="row height d-flex justify-content-center align-items-center">

                <div class="col-md-8">
                    <div class="section-title">
                        <h2>Cari Puskesmas</h2>
                    </div>
                    <div class="search">
                        <i class="fa fa-search"></i>
                        <input type="text" class="form-control" placeholder="Cari Puskesmas">
                        <button class="btn">Search</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="list-puskesmas">
            <div class="container">
                <h3 class="section-title">DAFTAR PUSKESMAS</h3>
                <div class="row g-4" id="puskesmasContainer">
                </div>
            </div>
        </section>
    </div>
    `;
  },
     
  async afterRender() {
    const puskesmasList = await PuskesmasSource.listPuskesmas();
    const puskesmasContainer = document.getElementById('puskesmasContainer');
    puskesmasList.forEach((puskesmas) => {
      puskesmasContainer.innerHTML += puskesmasCard(puskesmas);
    });
  },
};
     
export default Reservation;
