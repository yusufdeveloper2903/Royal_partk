import { useId } from 'react';
import { siteConfig } from '@/shared/config';
import { cn } from '@/shared/lib';
import { Button, Container, Logo } from '@/shared/ui';
import { useMobileMenu } from '../model/useMobileMenu';
import styles from './Header.module.scss';

export const Header = () => {
  const { isOpen, toggle, close } = useMobileMenu();
  const menuId = useId();

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Logo />

        <button
          type="button"
          className={styles.burger}
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={toggle}
        >
          <span className={cn(styles.burgerIcon, isOpen && styles.burgerIconOpen)} />
        </button>

        <div id={menuId} className={cn(styles.menu, isOpen && styles.menuOpen)}>
          <nav className={styles.nav} aria-label="Main">
            <ul className={styles.navList} role="list">
              {siteConfig.navigation.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink} onClick={close}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button href={siteConfig.bookingHref} onClick={close}>
            Book now
          </Button>
        </div>
      </Container>
    </header>
  );
};
