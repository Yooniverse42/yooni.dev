import styles from '@/components/Footer/Footer.module.css';
import clsx from 'clsx';

const footerLink = [
  ['https://github.com', 'Github', 'social-github'],
  ['', 'Notion', 'social-notion'],
  ['https://velog.io/@yxxnicode', 'Velog', 'social-velog'],
  ['', 'Kakao Open Chat', 'social-kakao'],
];

export default function Footer() {
  return (
    <footer className={clsx(styles.container, 'flexCenter')}>
      <div className={clsx(styles.linkWrapper, 'flexCenter')}>
        {footerLink.map(([url, name, img]) => (
          <a href={url} key={name} target="_blank" rel="noopener noreferrer">
            <svg
              width="24"
              height="24"
              className={styles.icon}
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <use href={`/icons/stack.svg#${img}`} />
            </svg>
          </a>
        ))}
      </div>
      <p className={styles.copyright}>
        &#169; 2025 Jiyun Kim. All rights reserved.
      </p>
    </footer>
  );
}
