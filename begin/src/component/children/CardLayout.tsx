import type { ReactNode } from 'react';
import styles from '../props/Card.module.css';

function CardLayout({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className={styles.card}>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </>
  );
}

export default CardLayout;
