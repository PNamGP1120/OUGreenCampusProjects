import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import Button from '../../components/Button/Button'; // **ĐÃ THÊM IMPORT**

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1>404</h1>
      <h2>Trang không tồn tại</h2>
      <p>Rất tiếc, trang bạn đang tìm kiếm không có ở đây. Có thể nó đã bị xóa hoặc bạn đã nhập sai địa chỉ.</p>
      <Link to="/"><Button>Quay về Trang chủ</Button></Link>
    </div>
  );
};
export default NotFoundPage;