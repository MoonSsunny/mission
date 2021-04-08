import React from 'react';
import styles from '../../app.module.css';

const Navigation = ({ menu, isActive }) => {
  //  path값 비교해서 현재 path값과 같으면 active 스타일 적용
  return isActive === true ? (
    <p className={styles.active}>{menu.name}</p>
  ) : (
    <p>{menu.name}</p>
  );
};

export default Navigation;
