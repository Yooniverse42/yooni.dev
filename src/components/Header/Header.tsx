import ThemeToggle from '@/components/Button/ThemeToggle';
import styles from '@/components/Header/Header.module.css';
import NavMenu from '@/components/NavMenu/NavMenu';
import { Link } from 'react-router-dom';
import MenuToggle from '@/components/Button/MenuToggle';
import clsx from 'clsx';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const handleMode = (e: React.KeyboardEvent<HTMLOrSVGElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setOpen((prev) => !prev);
      e.preventDefault();
    }
  };

  return (
    <header role="banner" className={styles.container}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.logoTitle}>
          <Link to={'/'} className={styles.homeLink}>
            <img
              src="/favicons/android-chrome-512x512.png"
              alt="about으로 이동"
              className={styles.homeLogoImg}
            />
          </Link>
          <p className={styles.title}>김지윤 | 프론트엔드 개발자</p>
        </h1>
        <div className={clsx(styles.navMenuWrapperDesk, 'desktopOnly')}>
          <NavMenu />
        </div>
        <div className={clsx(styles.themeToggleWrapperDesk, 'desktopOnly')}>
          <ThemeToggle />
        </div>
        <div
          className={clsx(isOpen && styles.floatMenu, 'mobileOnly')}
          tabIndex={0}
          onKeyDown={handleMode}
        >
          <MenuToggle isOpen={isOpen} setOpen={setOpen} />
        </div>
        {isOpen && (
          <>
            <div className={styles.dimmed} onClick={() => setOpen(false)}></div>
            <div className={clsx(styles.openMenu, 'mobileOnly')}>
              <div className={clsx(styles.navMenuWrapper, 'mobileOnly')}>
                <NavMenu onClose={() => setOpen(false)} />
              </div>
              <div className={clsx(styles.themeToggleWrapper, 'mobileOnly')}>
                <ThemeToggle />
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
