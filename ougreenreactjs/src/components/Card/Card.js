import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ image, title, description, link }) => {
  return (
    <div className={styles.card}>
      <Link to={link}>
        <img src={image || 'https://placehold.co/600x400/a9d5b8/333?text=OU+Green'} alt={title} className={styles.cardImage} />
      </Link>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>
            <Link to={link}>{title}</Link>
        </h3>
        <p className={styles.cardDescription}>{description}</p>
        <Link to={link} className={styles.readMore}>Xem chi tiết →</Link>
      </div>
    </div>
  );
};

export default Card;
