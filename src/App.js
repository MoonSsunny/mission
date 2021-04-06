import styles from './app.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import LoginPage from './components/login_page/login_page';
import RegisterPage from './components/register_page/register_page';
import ServicePage from './components/service_page/service_page';
import Navigation from './components/layout/navigation';
function App() {
  const pathName = useLocation().pathname;
  const menus = [
    { name: '서비스', path: '/', id: 'service' },
    { name: '회원가입', path: '/sign-up', id: 'register' },
    { name: '로그인', path: '/login', id: 'login' },
  ];

  return (
    <>
      <Router>
        <nav className={styles.navigation}>
          <div>logo</div>
          <ul className={styles.menuItem}>
            {menus.map((menu) => {
              return (
                <li>
                  <Link to={menu.path} key={menu.id}>
                    <Navigation
                      menu={menu}
                      isActive={pathName === menu.path ? true : false}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Switch>
          <Route path="/sign-up" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={ServicePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
