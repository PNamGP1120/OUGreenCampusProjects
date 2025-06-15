import React, { useState, useEffect } from 'react';
import styles from './NewsPage.module.css';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import { getNews as fetchNews } from '../../services/apiService';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true);
      const data = await fetchNews();
      setNews(data);
      setIsLoading(false);
    };
    loadNews();
  }, []);

  const filteredNews = news.filter(item => filter === 'all' || item.category === filter);
  const featuredArticle = filteredNews[0];
  const otherArticles = filteredNews.slice(1);

  return (
    <div className={styles.newsPage}>
        <div className={styles.header}>
            <h1 className={styles.title}>Tin tức & Sự kiện</h1>
            <p className={styles.subtitle}>Nơi cập nhật những câu chuyện, hoạt động và góc nhìn mới nhất từ cộng đồng OU Green Plus.</p>
            <div className={styles.filters}>
                <button onClick={() => setFilter('all')} className={filter === 'all' ? styles.activeFilter : ''}>Tất cả</button>
                <button onClick={() => setFilter('Môi trường')} className={filter === 'Môi trường' ? styles.activeFilter : ''}>Môi trường</button>
                <button onClick={() => setFilter('Cộng đồng')} className={filter === 'Cộng đồng' ? styles.activeFilter : ''}>Cộng đồng</button>
            </div>
        </div>
        
        <div className="page-container">
            {isLoading ? <div className="center-content"><Spinner /></div> : (
                <>
                    {/* Tin tức nổi bật */}
                    {featuredArticle && (
                        <Link to={`/tin-tuc/${featuredArticle.id}`} className={styles.featuredArticle}>
                            <div className={styles.featuredImage} style={{backgroundImage: `url(${featuredArticle.image || 'https://placehold.co/1200x600/e8f5e9/616161?text=OU+Green'})`}}></div>
                            <div className={styles.featuredContent}>
                                <span className={styles.featuredTag}>{featuredArticle.category}</span>
                                <h2>{featuredArticle.title}</h2>
                                <p>{featuredArticle.description}</p>
                            </div>
                        </Link>
                    )}
                    
                    {/* Lưới các tin tức khác */}
                    <div className={styles.newsGrid}>
                        {otherArticles.map(item => (
                            <Card
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                link={`/tin-tuc/${item.id}`}
                                category={item.category}
                                date={item.date}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    </div>
  );
};
export default NewsPage;