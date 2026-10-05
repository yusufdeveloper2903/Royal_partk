import logoSrc from '@/shared/assets/images/brand/logo.png';
import { siteConfig } from '@/shared/config';
import { cn } from '@/shared/lib';
import styles from './Logo.module.scss';

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <a href="#home" className={cn(styles.logo, className)} aria-label={`${siteConfig.name} — home`}>
    <img className={styles.image} src={logoSrc} alt="" width={144} height={136} />
    <span className={styles.name}>{siteConfig.name}</span>
  </a>
);
