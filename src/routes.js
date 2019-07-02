import Login from './pages/Accounts/Login';
import Dashboard from './pages/Dashboard';

const routes = [
  { path: '/login', component: Login, exact: true },
  { path: '/dashboard', component: Dashboard, exact: true }
];

export default routes;
