import React from 'react';
import styles from './ProjectsPage.module.css';
import { FaCalendarAlt, FaBullhorn, FaLeaf, FaUsers, FaRecycle, FaPaintBrush } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

// **THAY ĐỔI:** Dữ liệu đã được cập nhật dựa trên các hoạt động thực tế của CLB OU Green Plus.
const timelineData = [
    {
        id: 1,
        date: 'Tháng 3 Hàng năm',
        icon: <FaLeaf />,
        title: 'Dự án Green+ Tour',
        description: 'Tổ chức chuỗi trạm xanh di động tại các cơ sở của trường, thu gom rác tái chế và lan tỏa kiến thức sống xanh đến cộng đồng sinh viên.',
        type: 'Hoạt động Sinh viên',
        image: 'https://images.unsplash.com/photo-1576085898323-21a33d8a743a?q=80&w=2839&auto=format&fit=crop',
    },
    {
        id: 2,
        date: 'Tháng 7-8 Hàng năm',
        icon: <FaUsers />,
        title: 'Chiến dịch Mùa Hè Xanh',
        description: 'Tham gia các hoạt động tình nguyện hè tại các địa phương khó khăn, tập trung vào việc xây dựng công trình và các hoạt động bảo vệ môi trường.',
        type: 'Tình nguyện Cộng đồng',
        image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2940&auto=format&fit=crop',
    },
    {
        id: 3,
        date: 'Tháng 4 & 10 Hàng năm',
        icon: <FaRecycle />,
        title: 'Ngày hội Đổi rác lấy quà',
        description: 'Khuyến khích sinh viên thu gom pin cũ, đồ nhựa, giấy vụn để đổi lấy cây xanh và các sản phẩm thân thiện với môi trường.',
        type: 'Sự kiện Tái chế',
        image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2940&auto=format&fit=crop',
    },
    {
        id: 4,
        date: 'Tháng 3 Hàng năm',
        icon: <FaBullhorn />,
        title: 'Hưởng ứng Giờ Trái Đất',
        description: 'Tổ chức các hoạt động sáng tạo như đêm nhạc acoustic, workshop làm nến để kêu gọi cộng đồng tắt đèn và tiết kiệm năng lượng.',
        type: 'Sự kiện Toàn cầu',
        image: 'https://images.unsplash.com/photo-1517456793572-1d6ef2f78e59?q=80&w=2940&auto=format&fit=crop',
    },
     {
        id: 5,
        date: 'Định kỳ',
        icon: <FaPaintBrush />,
        title: 'Cải tạo mảng tường cũ',
        description: 'Khoác áo mới cho những bức tường cũ trong trường bằng những bức vẽ sáng tạo mang thông điệp bảo vệ môi trường.',
        type: 'Hoạt động Mỹ thuật',
        image: 'https://images.unsplash.com/photo-1543373014-cfe4f421d384?q=80&w=2894&auto=format&fit=crop',
    },
];

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPage}>
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Hành trình của Chúng tôi</h1>
                <p className={styles.pageSubtitle}>
                    Mỗi dự án là một câu chuyện, mỗi sự kiện là một dấu ấn. Cùng nhìn lại hành trình không ngừng nghỉ của OU Green Plus trên con đường xây dựng một tương lai bền vững.
                </p>
            </div>

            <div className={styles.timeline}>
                {timelineData.map((item, index) => (
                    <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                        <div className={styles.timelineIcon}>{item.icon}</div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineImage} style={{backgroundImage: `url(${item.image})`}}></div>
                            <div className={styles.contentWrapper}>
                                <span className={styles.projectType}>{item.type}</span>
                                <h2>{item.title}</h2>
                                <span className={styles.projectDate}><FaCalendarAlt /> {item.date}</span>
                                <p>{item.description}</p>
                                <Link to={`/du-an/${item.id}`}>
                                    <Button type="secondary">Xem chi tiết</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default ProjectsPage;