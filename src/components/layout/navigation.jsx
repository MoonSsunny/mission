import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import styles from '../../app.module.css';
let prePath = '';
const Navigation = ({ menu, isActive, onClick }) => {
  //  click event 처리
  let location = useLocation();
  useEffect(() => {
    prePath = window.location.href;
    console.log(prePath);
  }, [location]);

  const click = (e) => {
    console.log(e.target.parentNode.href);
  };
  //  path값 비교해서 현재 path값과 같으면 active 스타일 적용
  return isActive === true ? (
    <p className={styles.active} onClick={click}>
      {menu.name}
    </p>
  ) : (
    <p onClick={click}>{menu.name}</p>
  );
};

export default Navigation;
