import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './NewsDetailPage.module.css';
import Spinner from '../../components/Spinner/Spinner';
import { getNewsById } from '../../services/apiService';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const NewsDetailPage = () => {
  const { newsId } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi vào
    const loadArticle = async () => {
      const data = await getNewsById(newsId);
      setArticle(data);
      setIsLoading(false);
    };
    loadArticle();
  }, [newsId]);

  if (isLoading) return <div className='center-content'><Spinner /></div>;
  if (!article) return <NotFoundPage />;

  return (
    <div className={styles.newsDetailPage}>
        <div className={styles.header} style={{backgroundImage: `url(${article.image})`}}>
            <div className={styles.headerOverlay}>
                <div className="page-container">
                     <span className={styles.categoryTag}>{article.category}</span>
                     <h1 className={styles.title}>{article.title}</h1>
                     <p className={styles.date}>{article.date}</p>
                </div>
            </div>
        </div>
        <div className={`page-container ${styles.content}`}>
            <p className={styles.description}>{article.description}</p>
            <div className={styles.mainContent} dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }} />
        </div>
    </div>
  );
};
export default NewsDetailPage;
