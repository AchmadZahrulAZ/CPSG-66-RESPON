import About from '../views/pages/patient-about';
import Contact from '../views/pages/patient-contact';
import Detail from '../views/pages/patient-detail-puskesmas';
import Home from '../views/pages/patient-home';
import SignIn from '../views/pages/patient-sign-in';
import Reservation from '../views/pages/patient-reservation';
import SignUp from '../views/pages/patient-sign-up';
import Registration from '../views/pages/pasien-registration';
import QueueList from '../views/pages/patient-queue-list';

const routes = {
  '/': Home,
  '/beranda': Home,
  '/reservasi': Reservation,
  '/tentang-kami': About,
  '/kontak': Contact,
  '/masuk': SignIn,
  '/daftar': SignUp,
  '/detail-puskesmas': Detail,
  '/pendaftaran': Registration,
  '/list-antrian': QueueList,
};

export default routes;
