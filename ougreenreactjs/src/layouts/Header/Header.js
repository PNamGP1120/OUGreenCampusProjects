import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Button from '../../components/Button/Button';

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink;
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Nâng cấp logo, giữ nguyên cấu trúc chung */}
        <Link to="/" className={styles.logo}>
          <span className={styles.ou}>OU </span>
          <span className={styles.green}> GREEN</span>
          <span className={styles.plus}>+</span>
        </Link>

        {/* Giữ nguyên các mục điều hướng */}
        <nav className={styles.nav}>
          <NavLink to="/" className={navLinkStyles} end>Trang chủ</NavLink>
          <NavLink to="/hanh-dong" className={navLinkStyles}>Hành động</NavLink>
          <NavLink to="/du-an" className={navLinkStyles}>Dự án</NavLink>
          <NavLink to="/tin-tuc" className={navLinkStyles}>Tin tức</NavLink>
          <NavLink to="/goc-xanh" className={navLinkStyles}>Góc xanh</NavLink>
          <NavLink to="/lien-he" className={navLinkStyles}>Liên hệ</NavLink>
        </nav>

        {/* Giữ nguyên nút Tham gia ngay */}
        <Link to="/lien-he"><Button>Tham gia ngay</Button></Link>
      </div>
    </header>
  );
};

export default Header;