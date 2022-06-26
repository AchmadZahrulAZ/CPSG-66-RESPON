import About from '../views/pages/about';
import Contact from '../views/pages/contact';
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Reservation from '../views/pages/reservation';
import Regis from '../views/pages/regis';
import Pendaftaran from '../views/pages/pasien-pendaftaran';
import ListAntrian from '../views/pages/pasien-list-antrian';

const routes = {
  '/': Home,
  '/home': Home,
  '/reservation': Reservation,
  '/about': About,
  '/contact': Contact,
  '/login': Login,
  '/regis': Regis,
  '/detail': Detail,
  '/pendaftaran': Pendaftaran,
  '/list-antrian': ListAntrian,
};

export default routes;
