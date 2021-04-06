import React from 'react';
import styles from '../../app.module.css';

const Navigation = ({ menu, isActive }) => {
  return isActive === true ? (
    <p className={styles.active}>{menu.name}</p>
  ) : (
    <p>{menu.name}</p>
  );
};

export default Navigation;
