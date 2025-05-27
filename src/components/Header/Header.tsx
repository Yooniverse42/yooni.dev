import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import styles from '@/components/Header/Header.module.css';
import NavMenu from '@/components/NavMenu/NavMenu';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header role="banner" className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.head}>
          <span className="sr-only">
            프론트엔드 개발자 김지윤의 포트폴리오 입니다.
          </span>
          <Link to={'/'} className={styles.moveHome}>
            <img
              src="/android-chrome-512x512.png"
              alt="about으로 이동"
              className={styles.moveHomeImg}
            />
          </Link>
        </h1>
        <NavMenu />
      </div>

      <ThemeToggle />
    </header>
  );
}
