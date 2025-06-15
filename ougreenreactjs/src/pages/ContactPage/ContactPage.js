import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import Button from '../../components/Button/Button';
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trong thực tế, bạn sẽ gửi dữ liệu này đến một API backend
    console.log('Dữ liệu form đã gửi:', formData);
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={styles.contactPage}>
        <div className={styles.header}>
            <h1 className={styles.title}>Kết nối với Chúng tôi</h1>
            <p className={styles.subtitle}>Luôn sẵn sàng lắng nghe những ý tưởng, câu hỏi và mong muốn hợp tác từ bạn.</p>
        </div>
        <div className={`page-container ${styles.layout}`}>
            {/* Cột thông tin bên trái */}
            <div className={styles.infoColumn}>
                <h2>Thông tin liên hệ</h2>
                <p>Bạn có thể liên hệ trực tiếp với chúng tôi qua các kênh dưới đây. Chúng tôi sẽ cố gắng phản hồi trong thời gian sớm nhất.</p>
                
                <div className={styles.infoItem}>
                    <FaEnvelope className={styles.icon} />
                    <div>
                        <h4>Email</h4>
                        <a href="mailto:ougreenplus@ou.edu.vn">ougreenplus@ou.edu.vn</a>
                    </div>
                </div>

                <div className={styles.infoItem}>
                    <FaMapMarkerAlt className={styles.icon} />
                    <div>
                        <h4>Địa chỉ</h4>
                        <p>97 Võ Văn Tần, Phường 6, Quận 3, TP. Hồ Chí Minh</p>
                    </div>
                </div>

                <div className={styles.socialLinks}>
                    <h4>Theo dõi chúng tôi</h4>
                    <div>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Cột form bên phải */}
            <div className={styles.formColumn}>
                <h2>Gửi tin nhắn cho chúng tôi</h2>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Họ và tên</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="subject">Chủ đề</label>
                        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Nội dung tin nhắn</label>
                        <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <Button type="primary">Gửi đi</Button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;