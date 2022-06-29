import StaffHome from '../views/pages/staff-home';
import StaffDataAntrian from '../views/pages/staff-data-antrian';
import StaffKritikDanSaran from '../views/pages/staff-kritik-dan-saran';
import StaffFaq from '../views/pages/staff-faq';
import StaffInformasiPuskesmas from '../views/pages/staff-informasi-puskesmas';
import IsiDataPuskesmas from '../views/pages/staff-isi-data-puskesmas';

const routes = {
  '/': StaffHome,
  '/staffhome': StaffHome,
  '/staffdataantrian': StaffDataAntrian,
  '/staffinformasipuskesmas': StaffInformasiPuskesmas,
  '/staffkritikdansaran': StaffKritikDanSaran,
  '/stafffaq': StaffFaq,
  '/staffisidatapuskesmas': IsiDataPuskesmas,
};

export default routes;
