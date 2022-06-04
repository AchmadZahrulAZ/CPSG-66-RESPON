// import RestaurantSource from '../../data/restaurant-source';
// import { createRestaurantItemTemplate } from '../templates/template-creator';

const StaffPengaturanAkun = {
  async render() {
    return `
    <div class="pisah-atas"></div>
    <section class="container" id="pengaturanAkun">
        <div class="d-flex justify-content-center my-4">
            <h2>PENGATURAN AKUN</h2>
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

export default StaffPengaturanAkun;
