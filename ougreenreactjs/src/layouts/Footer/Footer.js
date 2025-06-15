import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerAbout}>
             <Link to="/" className={styles.footerLogo}>
                <span>OU Green Campus</span>
            </Link>
            <p>
              Phong trào của sinh viên Đại học Mở TP.HCM vì một môi trường xanh và một cộng đồng bền vững.
            </p>
          </div>
          <div className={styles.footerLinks}>
            <h4>Khám phá</h4>
            <ul>
              <li><Link to="/hanh-dong">Hành động</Link></li>
              <li><Link to="/du-an">Dự án</Link></li>
              <li><Link to="/tin-tuc">Tin tức</Link></li>
              <li><Link to="/goc-xanh">Góc xanh</Link></li>
            </ul>
          </div>
          <div className={styles.footerSocial}>
            <h4>Kết nối</h4>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
            <p>Email: ougreencampus@ou.edu.vn</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {currentYear} OU Green Campus. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
