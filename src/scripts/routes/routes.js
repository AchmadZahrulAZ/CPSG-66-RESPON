import StaffHome from '../views/pages/staff-home';
import StaffDataAntrian from '../views/pages/staff-data-antrian';
import StaffKritikDanSaran from '../views/pages/staff-kritik-dan-saran';
import StaffInformasiPuskesmas from '../views/pages/staff-informasi-puskesmas';

const routes = {
  '/': StaffHome,
  '/staffhome': StaffHome,
  '/staffdataantrian': StaffDataAntrian,
  '/staffinformasipuskesmas': StaffInformasiPuskesmas,
  '/staffkritikdansaran': StaffKritikDanSaran,
};

export default routes;
