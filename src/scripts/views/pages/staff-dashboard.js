// import RestaurantSource from '../../data/restaurant-source';
// import { createRestaurantItemTemplate } from '../templates/template-creator';

const StaffDashboard = {
  async render() {
    return `
    <div class="pisah-atas"></div>
    <section class="container" id="dashboardData">
        <div class="d-flex justify-content-center my-4">
            <h2>DATA PUSKESMAS</h2>
        </div>
        <div class="d-flex">
            <div class="p-2 w-50">Nama</div>
            <div class="p-2 ">: Puskesmas Bandung Kota</div>
        </div>
        <div class="d-flex">
            <div class="p-2 w-50">Alamat</div>
            <div class="p-2 ">: Jalan Bandung Raya No. 105, Kota Bandung</div>
        </div>
        <div class="d-flex">
            <div class="p-2 w-50">No.Telepon</div>
            <div class="p-2 ">: (022)-222-222-222</div>
        </div>
        <div class="d-flex">
            <div class="p-2 w-50">Poli yang Tersedia</div>
            <div class="p-2 ">: poli mata poli gigi poli umum</div>
        </div>
        <div class="d-flex">
            <div class="p-2 w-50">Link Maps</div>
            <div class="p-2 ">: https://www.puskesmas.com</div>
        </div>
        <div class="d-flex">
            <div class="p-2 w-50">Denah Puskesmas</div>
            <div class="p-2 ">: <img src="https://puskesmasmadurejo.files.wordpress.com/2019/05/dennah-baru.jpg" class="gambar" alt="..."></div>
        </div>
    </section>

    <!-- cari puskesmas - dashboard pasien -->
                    <div class="pisah-atas"></div>
                    <section class="container" id="cariPuskesmas">
                        <div class="d-flex justify-content-center mt-3">
                            <h2>CARI PUSKESMAS</h2>
                        </div>
                        <div class="d-flex justify-content-center">
                            <form class="d-flex m-1" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                        <div class="d-flex justify-content-center my-4">
                            <h2>DAFTAR PUSKESMAS</h2>
                        </div>
                        <div class="d-flex justify-content-evenly flex-wrap">
                            <div class="card ms-1 mb-3" style="width: 18rem;">
                                <img src="https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card ms-1 mb-3" style="width: 18rem;">
                                <img src="https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card ms-1 mb-3" style="width: 18rem;">
                                <img src="https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card ms-1 mb-3" style="width: 18rem;">
                                <img src="https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card  ms-1 mb-3" style="width: 18rem;">
                                <img src="https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card ms-1 mb-3" style="width: 18rem;">
                                <img src="https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card ms-1 mb-3" style="width: 18rem;">
                                <img src="https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card ms-1 mb-3" style="width: 18rem;">
                                <img src="https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <div class="card ms-1 mb-3" style="width: 18rem;">
                                <img src="https://p4.wallpaperbetter.com/wallpaper/745/67/618/jujutsu-kaisen-anime-boys-anime-hd-wallpaper-preview.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- informasi belum tersedia - staff  -->
                    <div class="pisah-atas"></div>
                    <section class="container" id="dashboardNoData">
                        <div class="d-flex justify-content-center my-4">
                            <h2>DATA PUSKESMAS</h2>
                        </div>
                        <div class="lebar">
                            <h2>MAAF DATA PUSKESMAS BELUM TERSEDIA. SILAHKAN MENGISI DATA TERLEBIH DAHULU</h2>
                            <button type="button" class="btn btn-info mt-5">Isi Data Puskesmas</button>
                        </div>
                    </section>
      `;
  },

  async afterRender() {
    // const restaurantList = await RestaurantSource.listRestaurant();
    // const restaurantContainer = document.querySelector('#list-restaurant');
    // restaurantList.forEach((restaurant) => {
    //   restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    // });
  },
};

export default StaffDashboard;
