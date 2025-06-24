import AboutCard from '@/components/AboutCard/AboutCard';
import styles from '@/pages/About.module.css';
import { getImage } from '@/utils/getImage';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function About() {
  const [myProfile, setMyProfile] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getProfile = async () => {
      const profileUrl = await getImage('profile', 'about', 'my-profile.jpeg');
      setMyProfile(profileUrl ?? undefined);
    };
    getProfile();
  }, []);

  return (
    <>
      <section className={styles.profileSection}>
        <h2>Glad you’re here!</h2>
        <img src={myProfile} alt="지윤의 프로필" className={styles.profile} />
        <div className={clsx(styles.introduction, 'flexCenter')}>
          <p>안녕하세요, 클릭해 주셔서 감사합니다.</p>
          <div className="flexCenter">
            <p>프론트엔드 개발자 김지윤 입니다.</p>
            <img src="images/nerdface.png" alt="얼굴" className={styles.icon} />
          </div>
        </div>
      </section>
      <div className={styles.sectionLine}></div>
      <section className={styles.valuesSection}>
        <div className={styles.cardWrapper}>
          <AboutCard icon="handshake" />
          <AboutCard icon="bullseye" />
        </div>
        <div className={styles.cardWrapper}>
          <AboutCard icon="seedling" />
          <AboutCard icon="face" />
        </div>
      </section>
    </>
  );
}
