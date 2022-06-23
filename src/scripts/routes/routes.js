import About from '../views/pages/about';
import Contact from '../views/pages/contact';
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Reservation from '../views/pages/reservation';
import Regis from '../views/pages/regis';

const routes = {
  '/': Home,
  '/home': Home,
  '/reservation': Reservation,
  '/about': About,
  '/contact': Contact,
  '/login': Login,
  '/regis': Regis,
  '/detail': Detail,
};

export default routes;
