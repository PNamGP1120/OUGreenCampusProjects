import React from 'react';
import styles from './ActionPage.module.css';
import { Link } from 'react-router-dom';
// **THAY ĐỔI:** Cập nhật lại các icon được import
import { FaTree, FaHandHoldingHeart, FaFistRaised, FaUsers, FaBullhorn } from 'react-icons/fa';
import Button from '../../components/Button/Button';

// **THAY ĐỔI:** Cập nhật lại toàn bộ dữ liệu cho các giá trị cốt lõi
const coreValues = [
    { icon: <FaFistRaised />, title: "Xây dựng Sức mạnh", description: "Trang bị cho mỗi thành viên những kỹ năng, kiến thức và sự tự tin để trở thành những người dẫn dắt trong tương lai." },
    { icon: <FaUsers />, title: "Kết nối Cộng đồng", description: "Tạo ra một mạng lưới sinh viên rộng lớn, đoàn kết, cùng chia sẻ chung một mục tiêu và hỗ trợ lẫn nhau." },
    { icon: <FaBullhorn />, title: "Lan tỏa Sức mạnh", description: "Nhân rộng những giá trị tích cực và truyền cảm hứng hành động đến toàn thể sinh viên và cộng đồng xã hội." }
];

const ActionPage = () => {
  return (
    <div className={styles.actionPage}>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Hơn cả một Câu lạc bộ - Đây là một Phong trào</h1>
          <p className={styles.heroSubtitle}>Chúng tôi là thế hệ sinh viên OU cam kết hành động vì một tương lai bền vững, nơi con người và thiên nhiên cùng phát triển hài hòa.</p>
        </div>
      </section>

      {/* 2. SỨ MỆNH CỐT LÕI */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
            <div className={styles.missionGrid}>
                <div className={styles.pillarCard}>
                    <div className={styles.pillarIcon}><FaTree /></div>
                    <h2 className={styles.pillarTitle}>Bảo vệ Môi trường</h2>
                    <p className={styles.pillarDescription}>
                        Từ việc giảm thiểu rác thải nhựa trong khuôn viên trường, tổ chức các chiến dịch trồng cây phủ xanh, đến việc nâng cao nhận thức về biến đổi khí hậu, chúng tôi hành động quyết liệt để chữa lành và bảo vệ Trái Đất.
                    </p>
                </div>
                <div className={styles.pillarCard}>
                    <div className={styles.pillarIcon}><FaHandHoldingHeart /></div>
                    <h2 className={styles.pillarTitle}>Phục vụ Cộng đồng</h2>
                    <p className={styles.pillarDescription}>
                        Chúng tôi tin rằng sự phát triển bền vững phải gắn liền với trách nhiệm xã hội. Các chuyến đi tình nguyện, các dự án hỗ trợ người yếu thế và các hoạt động văn hóa là cách chúng tôi lan tỏa sự sẻ chia và yêu thương.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. GIÁ TRỊ CỐT LÕI */}
       <section className={styles.valuesSection}>
         <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Giá trị của Chúng tôi</h2>
            <div className={styles.valuesGrid}>
                {coreValues.map((value, index) => (
                    <div key={index} className={styles.valueItem}>
                        <div className={styles.valueIcon}>{value.icon}</div>
                        <h3 className={styles.valueTitle}>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
         </div>
       </section>
      
      {/* 4. LỜI KÊU GỌI HÀNH ĐỘNG */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
            <h2>Bạn đã sẵn sàng để tạo nên khác biệt?</h2>
            <p>Hãy trở thành một phần của OU Green Plus, nơi bạn có thể cống hiến, học hỏi và cùng chúng tôi kiến tạo một tương lai xanh hơn.</p>
            <Link to="/lien-he"><Button>Tham gia ngay hôm nay</Button></Link>
        </div>
      </section>
    </div>
  );
};
export default ActionPage;