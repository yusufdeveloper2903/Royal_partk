import { SubscribeForm } from '@/features/subscribe-newsletter';
import { siteConfig } from '@/shared/config';
import { Container, Logo } from '@/shared/ui';
import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.grid}>
      <div className={styles.brand}>
        <Logo />
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <p className={styles.muted}>{siteConfig.contactHandle}</p>
        <ul className={styles.socials} role="list">
          {siteConfig.socials.map((social) => (
            <li key={social.label}>
              <a
                className={styles.socialLink}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <img src={social.icon} alt="" width={20} height={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {siteConfig.footerColumns.map((column) => (
        <nav key={column.title} aria-label={column.title}>
          <h2 className={styles.title}>{column.title}</h2>
          <ul className={styles.links} role="list">
            {column.links.map((link) => (
              <li key={link.label}>
                <a className={styles.link} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}

      <div className={styles.subscribe}>
        <h2 className={styles.title}>Subscribe</h2>
        <SubscribeForm />
      </div>
    </Container>

    <Container>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </Container>
  </footer>
);
