import React, { useState, useEffect, useCallback } from 'react';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { FaTree, FaUsers, FaHeart, FaHandshake, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ougreenLogo from '../../assets/images/ougreen-logo.png';

const slideData = [
  { image: 'https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/503340805_1125637639610986_3462026955727955013_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHXriTlaW1IcnRXYnXn8Nmdyl-hHuavhpDKX6Ee5q-GkGUGxdUKzuXSEhsK8oM0p7cIsebzi74uvWsII2sY3hBi&_nc_ohc=kwhG68VrS6gQ7kNvwGIE3AN&_nc_oc=AdkPgvp3S2OpkGOQpCcty-wB6J1qPsJzv5cXO-QT56-yQ8ermfRMZdMZsdlA4vjH9CfCOPvlkrH0HPdmiTdm2mc2&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=BS4L5VqBVfrdGQiqrqDv_g&oh=00_AfN9nEoGBQH2KWAAX_uheh_xH4jnhmzFcHnW4gEFWZkv1g&oe=68541797', headline: 'Hành động hôm nay, Vững bước tương lai', subheadline: 'Cùng OU Green Campus kiến tạo một môi trường học tập xanh, sạch và bền vững.' },
  { image: 'https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/486671251_1072979678210116_7054507078703731594_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFn2lAC84k8Bw_u0IR6xR1KsVFw3o9t3_GxUXDej23f8WYT5OxyJOTL14w-YbXbbPCA4-Qv_Tdq8XgnYu5qIRhD&_nc_ohc=ik0BFO39rBAQ7kNvwGsnA0J&_nc_oc=AdkHji-uGhrIhzmhyMq75fJ1BpNphvyXVGw73h9TOqnR49F5RteodkDS64TOmHZrq0m8o3Pb1F3n9tjeojBejI9F&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=isjctMdz9wTdGJA3-y35kg&oh=00_AfNCwhuYE4r2Xo3HGxNnjDCNVKI_jBXd_yV6EDc-nx4SVg&oe=685421F4', headline: 'Mỗi hành động nhỏ, Tạo nên thay đổi lớn', subheadline: 'Tham gia các dự án cộng đồng và lan tỏa tinh thần sống có trách nhiệm.' },
  { image: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/485363669_1065763658931718_3689711094539197276_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH5wAe2hh9C5DGl4aC2kpMJRwAriIoaRvJHACuIihpG8iK0D0NM2NBEzF0xwvm-HwcGyC3szsKwtRCuHmXZDri7&_nc_ohc=L0zwg_9OOOwQ7kNvwFqVP_J&_nc_oc=AdmVGEtM9TCPFx-HTOM7brgZ4mnEm49_zoCwABveLekggqEKby0CkVTgLH6d6fQAYBpJtTRnRDwxGPQjf5N-7-6W&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=Um5TB_ki4JUdQm7eFtiL0g&oh=00_AfPfHKI-_kpcaEu_AO7VnP9YMl__JdD5G-_jVCU6GFBH5g&oe=68542322', headline: 'Biến rác thải thành tài nguyên', subheadline: 'Khám phá sức mạnh của tái chế và kinh tế tuần hoàn cùng chúng tôi.' },
];

const metricsData = [
    { icon: <FaUsers />, value: '1000+', label: 'Tình nguyện viên' },
    { icon: <FaTree />, value: '1300+', label: 'Cây xanh đã trồng' },
    { icon: <FaHeart />, value: '20000+', label: 'Lượt theo dõi' },
    { icon: <FaHandshake />, value: '15+', label: 'Đối tác đồng hành' },
];

const featuredNews = [
    { id: 1, title: 'Khởi động chiến dịch "Chủ nhật Xanh" 2025', description: 'Cùng nhau làm sạch khuôn viên trường và các khu vực lân cận để xây dựng môi trường học tập trong lành.', image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2940&auto=format&fit=crop' },
    { id: 2, title: 'Workshop Tái chế: Biến rác thải thành nghệ thuật', description: 'Buổi hướng dẫn sáng tạo đầy cảm hứng dành cho sinh viên OU, biến vật dụng cũ thành tác phẩm độc đáo.', image: 'https://images.unsplash.com/photo-1593113646773-ae18c60a8434?q=80&w=2940&auto=format&fit=crop' },
    { id: 3, title: 'OU Green Plus thăm và tặng quà tại làng trẻ em SOS', description: 'Một hoạt động cộng đồng ý nghĩa, mang lại niềm vui và sự sẻ chia cho các em nhỏ có hoàn cảnh khó khăn.', image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2940&auto=format&fit=crop' },
];

const upcomingEvent = {
    title: 'Cuộc thi "Đại sứ Môi trường OU" 2025',
    description: 'Tỏa sáng với những dự án môi trường sáng tạo và trở thành gương mặt đại diện cho thế hệ sinh viên hành động vì một tương lai xanh.',
    date: 'Vòng sơ loại: 01/08 - 30/08/2025'
};

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide(current => (current + 1) % slideData.length);
    }, []);

    const prevSlide = () => {
        setCurrentSlide(current => (current - 1 + slideData.length) % slideData.length);
    };
    
    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    }

    useEffect(() => {
        const timer = setTimeout(nextSlide, 7000);
        return () => clearTimeout(timer);
    }, [currentSlide, nextSlide]);

    return (
        <div className={styles.homePage}>
            {/* 1. HERO SECTION */}
            <section className={styles.hero}>
                 {slideData.map((slide, index) => (
                    <div key={index} className={index === currentSlide ? `${styles.slide} ${styles.active}` : styles.slide} style={{ backgroundImage: `url(${slide.image})` }}>
                         <div className={styles.heroOverlay}>
                            <h1>{slide.headline}</h1>
                            <p>{slide.subheadline}</p>
                            <Link to="/hanh-dong"><Button>Hành động cùng chúng tôi</Button></Link>
                        </div>
                    </div>
                 ))}
                <button onClick={prevSlide} className={`${styles.arrow} ${styles.prev}`}><FaChevronLeft /></button>
                <button onClick={nextSlide} className={`${styles.arrow} ${styles.next}`}><FaChevronRight /></button>
                <div className={styles.dots}>
                    {slideData.map((_, index) => (<div key={index} className={index === currentSlide ? `${styles.dot} ${styles.active}` : styles.dot} onClick={() => goToSlide(index)}></div>))}
                </div>
            </section>

            {/* 2. GIỚI THIỆU & SỐ LIỆU */}
            <section className={styles.aboutSection}>
                <div className={styles.container}>
                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutImage}>
                             <img src={ougreenLogo} alt="Logo CLB OU Green Plus" className={styles.logoImage} />
                        </div>
                        <div className={styles.aboutContent}>
                            <span className={styles.preTitle}>Về Chúng Tôi</span>
                            <h2 className={styles.sectionTitle}>CLB OU Green Plus</h2>
                            <p>Câu Lạc Bộ OU Green Plus, trực thuộc Phòng Công Tác Sinh Viên, được thành lập vào ngày 08/05/2019 với sứ mệnh Xây Dựng Và Lan Tỏa Ý Thức Bảo Vệ Môi Trường, Cộng Đồng Sinh Viên Và Xã Hội.</p>
                            <p>Câu Lạc Bộ dựa trên Ba Giá Trị Cốt Lõi: Xây Dựng, Lan Tỏa và Kết Nối, nhằm tạo ra môi trường kết nối sinh viên...</p>
                            <Link to="/hanh-dong"><Button type="secondary">Tìm hiểu thêm</Button></Link>
                        </div>
                    </div>
                </div>
                 <div className={styles.metricsGrid}>
                     {metricsData.map((metric, index) => (
                        <div key={index} className={styles.metricBox}>
                            <div className={styles.metricIcon}>{metric.icon}</div>
                            <div className={styles.metricValue}>{metric.value}</div>
                            <div className={styles.metricLabel}>{metric.label}</div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* 3. TIN TỨC NỔI BẬT */}
            <section className={styles.newsSection}>
                <div className={styles.container}>
                    <span className={styles.preTitle}>HOẠT ĐỘNG CỦA CHÚNG TÔI</span>
                    <h2 className={styles.sectionTitle}>Tin tức & Câu chuyện</h2>
                    <div className={styles.newsGrid}>
                        {featuredNews.map(item => (
                            <Card key={item.id} title={item.title} description={item.description} image={item.image} link={`/tin-tuc/${item.id}`} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* 4. SỰ KIỆN SẮP TỚI */}
            <section className={styles.eventSection}>
                 <div className={styles.container}>
                    <div className={styles.eventGrid}>
                        <div className={styles.eventContent}>
                            <span className={styles.preTitle}>Sự kiện tâm điểm</span>
                            <h2 className={styles.sectionTitle}>{upcomingEvent.title}</h2>
                            <p className={styles.eventDescription}>{upcomingEvent.description}</p>
                            <div className={styles.eventDetails}>
                                <span>🗓️</span> {upcomingEvent.date}
                            </div>
                            <Button>Khám phá cuộc thi</Button>
                        </div>
                        <div className={styles.eventImage}>
                            {/* Ảnh minh họa cho cuộc thi */}
                        </div>
                    </div>
                 </div>
            </section>
        </div>
    );
};
export default HomePage;