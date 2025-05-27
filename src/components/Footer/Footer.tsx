import styles from '@/components/Footer/Footer.module.css';

const footerLink = [
  ['https://github.com', 'Github', '/icons/social-github.svg'],
  ['', 'Instagram', '/icons/social-instagram.svg'],
  ['', 'Notion', '/icons/social-notion.svg'],
  ['', 'Kakao Open Chat', '/icons/social-kakao.svg'],
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.linkWrapper}>
        {footerLink.map(([url, name, img]) => (
          <a href={url} key={name} target="_blank" rel="noopener noreferer">
            <img src={img} alt="" className={styles.image} />
          </a>
        ))}
      </div>
      <p className={styles.copyright}>&#169; 2025 Jiyun Kim</p>
    </footer>
  );
}
