import styles from './test.module.css';

export default function TestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.testContainer}>
      {children}
    </div>
  );
}
