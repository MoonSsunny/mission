import styled from 'styled-components';
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
import { GoThreeBars } from 'react-icons/go';
import { useState } from 'react';
import Mypage from './components/service_page/mypage';
import MypageDetail from './components/service_page/mypage_detail';
import Logout from './components/service_page/logout';

const StyledNavbar = styled.nav`
  background-color: #dee2e5;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px;
  @media screen and (max-width: 768px) {
    padding: 0 30px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .logo {
    width: 80px;
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 10px;
      left: 20px;
    }
  }
`;

const StyledMenuItem = styled.ul`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 100px;
  }
`;

const StyledMenuList = styled.li`
  list-style: none;
  margin: 30px;
  @media screen and (max-width: 768px) {
    padding: 0;
    display: ${(props) => (props.menuDisplay === false ? 'none' : 'block')};
  }
`;

// useState로 상태를 업데이트 해서 상태에 따라 display값을 보여주도록 한다

const StyledHambuerMenu = styled.div`
  font-size: 50px;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

function App() {
  const pathName = useLocation().pathname;
  const [menuDisplay, setMenuDisplay] = useState(false);

  const menus = [
    { name: '서비스', path: '/', id: 'service' },
    { name: '회원가입', path: '/sign-up', id: 'register' },
    { name: '로그인', path: '/login', id: 'login' },
  ];

  const loginMenus = [
    { name: '서비스', path: '/', id: 'service' },
    { name: '마이페이지', path: '/mypage/order', id: 'mypage' },
    { name: '로그아웃', path: '/logout', id: 'logout' },
  ];

  const navMenus = sessionStorage.getItem('token') ? loginMenus : menus;

  return (
    <>
      <Router>
        <StyledNavbar>
          <img src="/img/logo.png" alt="service img" className="logo" />
          <StyledMenuItem>
            {navMenus.map((menu) => {
              return (
                <StyledMenuList menuDisplay={menuDisplay} key={menu.id}>
                  <Link to={menu.path}>
                    <Navigation
                      menu={menu}
                      isActive={pathName === menu.path ? true : false}
                    />
                  </Link>
                </StyledMenuList>
              );
            })}
          </StyledMenuItem>
          <StyledHambuerMenu
            onClick={() => {
              setMenuDisplay(!menuDisplay);
            }}
          >
            <GoThreeBars />
          </StyledHambuerMenu>
        </StyledNavbar>
        <Switch>
          <Route path="/sign-up" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={ServicePage} />
          <Route path="/mypage/order/:id" exact component={MypageDetail} />
          <Route path="/mypage/order" exact component={Mypage} />
          <Route path="/logout" exact component={Logout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
