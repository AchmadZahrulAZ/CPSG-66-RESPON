import AdminHome from '../views/pages/admin-home';
import AdminDataPasien from '../views/pages/admin-data-pasien';
import AdminDataStaff from '../views/pages/admin-data-staff';
import AdminDataAdmin from '../views/pages/admin-data-admin';

const routes = {
  '/': AdminHome,
  '/adminhome': AdminHome,
  '/admindatapasien': AdminDataPasien,
  '/admindatastaff': AdminDataStaff,
  '/admindataadmin': AdminDataAdmin,
};

export default routes;
