import styles from './Title.module.scss';

export default function Title() {
  return (
    <div className={styles.title}>
      <div className={styles.separator}></div>
      <div className={`${styles.text} display-flex-column-center`}>
        <p className={`${styles.text_title} font-kelly-400`}>Добро пожаловать</p>
        <p className={`${styles.text_description} font-kelly-400`}>Development</p>
      </div>
    </div>
  )
}