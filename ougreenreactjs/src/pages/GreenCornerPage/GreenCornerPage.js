import React from 'react';
import styles from './GreenCornerPage.module.css';
import { FaRecycle, FaLeaf, FaTimesCircle } from 'react-icons/fa';
import QuizGame from '../../components/Minigame/QuizGame';

const sortingData = [
    { icon: <FaLeaf />, title: 'Rác hữu cơ dễ phân hủy', color: 'green', items: ['Thức ăn thừa', 'Rau, củ, quả', 'Lá cây, hoa', 'Bã trà, cà phê'] },
    { icon: <FaRecycle />, title: 'Rác có thể tái chế', color: 'blue', items: ['Chai nhựa (PET, HDPE)', 'Lon nhôm, sắt', 'Giấy, báo, bìa carton', 'Hộp sữa, vỏ chai thủy tinh'] },
    { icon: <FaTimesCircle />, title: 'Rác còn lại', color: 'grey', items: ['Túi nilon, hộp xốp', 'Vỏ bánh kẹo', 'Đồ da, cao su', 'Vải, sành sứ vỡ'] },
];

const GreenCornerPage = () => {
  return (
    <div className={styles.greenCornerPage}>
        {/* Phần Header */}
        <div className={styles.header}>
            <h1 className={styles.title}>Góc Sống Xanh</h1>
            <p className={styles.subtitle}>Cùng trang bị những kiến thức và kỹ năng cần thiết để bắt đầu hành trình sống xanh của riêng bạn, góp phần tạo nên một tương lai bền vững.</p>
        </div>
        
        <div className="page-container">
            {/* Phần Hướng dẫn phân loại rác */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Hướng dẫn Phân loại Rác thải Tại nguồn</h2>
                <div className={styles.sortingGrid}>
                    {sortingData.map((category, index) => (
                        <div key={index} className={styles.sortingCard} style={{'--category-color': `var(--${category.color})`}}>
                            <div className={styles.cardIcon}>{category.icon}</div>
                            <h3 className={styles.cardTitle}>{category.title}</h3>
                            <ul className={styles.itemList}>
                                {category.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Phần Minigame */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Thử thách Kiến thức Xanh</h2>
                <p className={styles.sectionSubtitle}>Hãy xem bạn hiểu về môi trường đến đâu qua 10 câu hỏi trắc nghiệm thú vị của chúng tôi!</p>
                <QuizGame />
            </section>
        </div>
    </div>
  );
};
export default GreenCornerPage;