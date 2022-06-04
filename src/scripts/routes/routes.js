import StaffDashboard from '../views/pages/staff-dashboard';
import StaffDataAntrian from '../views/pages/staff-dataAntrian';
import StaffPengaturanAkun from '../views/pages/staff-pengaturanAkun';

const routes = {
  '/': StaffDashboard,
  '/staffdashboard': StaffDashboard,
  '/staffantrian': StaffDataAntrian,
  '/staffakun': StaffPengaturanAkun,
};

export default routes;
