import styles from './AboutMe.module.scss';
import { Images } from '@/utils/import-images';
import Title from '@/components/ui/title/Title';

export default function AboutMe() {
  return (
    <section className={`${styles.about_me} display-flex-column`}>
      <img src={Images.SectionAboutMe.src} alt="section-about-me" className={styles.image} />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.line}></div>
          <Title />
        </div>
      </div>
    </section>
  )
}