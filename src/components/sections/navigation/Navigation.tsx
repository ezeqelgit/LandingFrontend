import styles from './Navigation.module.scss';
import { navList } from '@/types/NavList';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.line_left}></div>
      <ul className={styles.list}>
        {navList.map(([id, label]) => (
          <li key={id} className={styles.item}>
            <div className={styles.hover}></div>
            <p className={`${styles.text} font-kelly-400`}>{label}</p>
          </li>
        ))}
      </ul>
      <div className={styles.line_right}></div>
    </nav>
  );
}