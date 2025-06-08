import styles from '@/pages/NotFound.module.css';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className={clsx(styles.container, 'flexCenter')}>
      <section className={clsx(styles.wrapper, 'flexCenter')}>
        <div className={clsx(styles.invalidPath, 'flexCenter')}>
          <img src="/icons/ghost.png" alt="ghost" aria-hidden={true} />
          <p>404 NOT FOUND</p>
          <img src="/icons/ghost.png" alt="ghost" aria-hidden={true} />
        </div>
        <p>존재하지 않는 경로입니다.</p>
        <p>하지만 프론트엔드 개발자 김지윤은 존재합니다!</p>
        <Link to={'/'} className={styles.toAbout}>
          저에 대해서 알아보시겠어요?
        </Link>
      </section>
    </div>
  );
}
