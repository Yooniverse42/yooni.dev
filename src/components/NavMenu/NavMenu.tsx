import { NavLink } from 'react-router-dom';
import styles from '@/components/NavMenu/NavMenu.module.css';

const navList = [
  ['/', 'ABOUT'],
  ['/project', 'PROJECT'],
  ['/resume', 'RESUME'],
  ['https://velog.io/@yxxnicode/posts', 'BLOG'],
];

export default function NavMenu() {
  return (
    <nav className={styles.container}>
      <ul role="menubar" className={styles.wrapper}>
        {navList.map(([to, title]) => (
          <li key={to} role="none" className={styles.list}>
            {to.startsWith('http') ? (
              <a
                href={to}
                target="_blank"
                rel="noopener noreferer"
                role="menuitem"
                className={styles.link}
              >
                {title}
              </a>
            ) : (
              <NavLink to={to} role="menuitem" className={styles.link}>
                {title}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
