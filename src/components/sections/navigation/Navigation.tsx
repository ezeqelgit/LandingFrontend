import styles from './Navigation.module.scss';
import { navList } from '@/types/NavList';
import { Icons } from '@/utils/import-images';

export default function Navigation() {
  return (
    <nav className={`${styles.nav} display-flex-center`}>
      <div className={styles.logo}>
        <Icons.LogoSvg />
      </div>
      <ul className={styles.list}>
        {navList.map(([id, label]) => (
          <li key={id} className={`${styles.item} display-flex-column`}>
            <div className={styles.hover}></div>
            <p className={`${styles.text} font-kelly-400`}>{label}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}