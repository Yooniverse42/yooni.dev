import ExperienceCard from '@/components/ExperienceCard/ExperienceCard';
import styles from '@/pages/Resume.module.css';
import { getImage } from '@/utils/getImage';
import { useEffect, useState } from 'react';
import { introduceSection } from '@/data';
import { educationCards, experienceCards } from '@/data/resumeCards';

export default function Resume() {
  const [myProfile, setMyProfile] = useState<string | undefined>(undefined);
  const eduUniversity = educationCards['university'];
  const eduHighSchool = educationCards['highSchool'][0];

  useEffect(() => {
    const getProfile = async () => {
      const profileUrl = await getImage('profile', 'resume', 'my-profile.jpg');
      setMyProfile(profileUrl ?? undefined);
    };
    getProfile();
  }, []);

  return (
    <>
      <div className={styles.resume}>
        <h2>
          김지윤
          <p className={styles.resumeDesc}>
            함께하는 가치를 소중히 여기는 개발자
          </p>
        </h2>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <section>
            <h3 className={styles.title}>Introduce</h3>
            <div className={styles.introduceWrapper}>
              <img
                src={myProfile}
                alt="지윤의 프로필"
                className={styles.profile}
              />
              <div className={styles.introduce}>
                {introduceSection.map((introduce, idx) => (
                  <p key={idx}>{introduce}</p>
                ))}
              </div>
            </div>
          </section>
          <section className={styles.sectionWrapper}>
            <h3 className={styles.title}>Experience</h3>
            <ul>
              {experienceCards.map((card, idx) => (
                <ExperienceCard
                  key={idx}
                  title={card.title}
                  subTitle={card.subTitle}
                  date={card.date}
                  desc={card.desc}
                />
              ))}
            </ul>
          </section>
          <section className={styles.sectionWrapper}>
            <h3 className={styles.title}>Education</h3>
            <div className={styles.educationWrapper}>
              <section>
                <h4>University</h4>
                <ul>
                  {eduUniversity.map((card) => (
                    <ExperienceCard
                      title={card.title}
                      subTitle={card.subTitle}
                      date={card.date}
                      edu={card.edu}
                    />
                  ))}
                </ul>
              </section>
              <section>
                <h4>High School</h4>
                <ul>
                  <ExperienceCard
                    title={eduHighSchool.title}
                    subTitle={eduHighSchool.subTitle}
                    date={eduHighSchool.date}
                    edu={eduHighSchool.edu}
                  />
                </ul>
              </section>
            </div>
          </section>
          <section className={styles.sectionWrapper}>
            <h3 className={styles.title}>Skills</h3>
          </section>
          <section className={styles.sectionWrapper}>
            <h3 className={styles.title}>Certifications</h3>
          </section>
        </div>
      </div>
    </>
  );
}
