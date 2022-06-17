import About from '../views/pages/about';
import Contact from '../views/pages/contact';
import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Reservation from '../views/pages/reservation';

const routes = {
  '/': Home,
  '/home': Home,
  '/reservation': Reservation,
  '/about': About,
  '/contact': Contact,
  '/login': Login,
};

export default routes;
