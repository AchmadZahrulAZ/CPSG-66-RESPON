import StaffHome from '../views/pages/staff-home';
import StaffDataAntrian from '../views/pages/staff-data-antrian';
import StaffFaq from '../views/pages/staff-faq';
import StaffInformasiPuskesmas from '../views/pages/staff-informasi-puskesmas';

const routes = {
  '/': StaffHome,
  '/staffhome': StaffHome,
  '/staffdataantrian': StaffDataAntrian,
  '/staffinformasipuskesmas': StaffInformasiPuskesmas,
  '/stafffaq': StaffFaq,
};

export default routes;
