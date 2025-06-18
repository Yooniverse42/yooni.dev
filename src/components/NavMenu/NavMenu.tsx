import { NavLink } from 'react-router-dom';
import styles from '@/components/NavMenu/NavMenu.module.css';
import clsx from 'clsx';

const navList = [
  ['/', 'ABOUT'],
  ['/project', 'PROJECT'],
  ['/resume', 'RESUME'],
];

export default function NavMenu({ onClose }: { onClose?: () => void }) {
  return (
    <nav className={styles.container}>
      <ul role="menubar" className={clsx(styles.wrapperDesk, 'desktopOnly')}>
        {navList.map(([to, title]) => (
          <li key={to} role="none" className={clsx(styles.list, 'flexCenter')}>
            <NavLink
              to={to}
              role="menuitem"
              className={({ isActive }) =>
                clsx(styles.link, isActive && styles.active)
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul role="menubar" className={clsx(styles.wrapperMobile, 'mobileOnly')}>
        {navList.map(([to, title]) => (
          <li key={to} role="none" className={clsx(styles.list, 'flexCenter')}>
            <NavLink
              to={to}
              role="menuitem"
              className={({ isActive }) =>
                clsx(styles.link, isActive && styles.active)
              }
              onClick={onClose}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
