import styles from './AboutMe.module.scss';
import { Icons } from '@/utils/import-images';

export default function AboutMe() {
  return (
    <section className={`${styles.about_me} display-flex-column`}>
      <div className={`${styles.container} display-flex-center`}>
        <Icons.MapSvg className={styles.map} />
      </div>
    </section>
  )
}