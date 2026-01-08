import React from 'react';
import * as Icons from 'lucide-react';
import styles from './FeatureCard.module.css';

/**
 * FeatureCard component - Card with icon, title, and description
 * @param {string} icon - Name of the Lucide icon
 * @param {string} title - Card title
 * @param {string} description - Card description
 * @param {string} link - Optional link URL
 */
export default function FeatureCard({ icon, title, description, link }) {
  const Icon = Icons[icon];
  
  const content = (
    <div className={styles.featureCard}>
      <div className={styles.iconWrapper}>
        {Icon && <Icon size={32} strokeWidth={2} />}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
  
  if (link) {
    return <a href={link} className={styles.cardLink}>{content}</a>;
  }
  
  return content;
}
