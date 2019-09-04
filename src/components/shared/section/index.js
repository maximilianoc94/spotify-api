import React from 'react';
import styles from './section.module.css';

function Section({ children }) {
  return (
    <div className={styles.innerSection}>
      {children}
    </div>
      );
}
export default Section;
