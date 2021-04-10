import { Link, useLocation } from 'react-router-dom';
import Navigation from './navigation';
import { GoThreeBars } from 'react-icons/go';
import styled from 'styled-components';
import { useState } from 'react';

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

function Navbar() {
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

  const onClick = (id) => {
    if (id === 'logout') {
      sessionStorage.clear();
      window.location.href = '/';
    }
  };

  const navMenus = sessionStorage.getItem('token') ? loginMenus : menus;

  return (
    <StyledNavbar>
      <img src="/img/logo.png" alt="service img" className="logo" />
      <StyledMenuItem>
        {navMenus.map((menu) => {
          return (
            <StyledMenuList
              menuDisplay={menuDisplay}
              key={menu.id}
              onClick={() => {
                onClick(menu.id);
              }}
            >
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
  );
}

export default Navbar;
