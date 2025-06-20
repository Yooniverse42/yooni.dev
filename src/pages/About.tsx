import AboutCard from '@/components/AboutCard/AboutCard';
import styles from '@/pages/About.module.css';
import clsx from 'clsx';

export default function About() {
  return (
    <>
      <section className={styles.profileSection}>
        <h2>Glad you’re here!</h2>
        <img
          src="images/profile-about.jpeg"
          alt="프로필 사진"
          className={styles.profile}
        />
        <div className={clsx(styles.introduction, 'flexCenter')}>
          <p>안녕하세요, 클릭해 주셔서 감사합니다.</p>
          <div className="flexCenter">
            <p>프론트엔드 개발자 김지윤 입니다.</p>
            <img src="images/face.png" alt="얼굴" className={styles.icon} />
          </div>
        </div>
      </section>
      <div className={styles.sectionLine}></div>
      <section className={styles.valuesSection}>
        <div className={styles.cardWrapper}>
          <AboutCard icon="ear" />
          <AboutCard icon="book" changeIcon={true} />
        </div>
        <div className={styles.cardWrapper}>
          <AboutCard icon="ladder" />
          <AboutCard icon="woman" changeIcon={true} />
        </div>
      </section>
    </>
  );
}
