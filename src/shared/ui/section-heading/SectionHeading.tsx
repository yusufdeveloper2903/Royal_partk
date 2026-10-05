import type { ReactNode } from 'react';
import { cn } from '@/shared/lib';
import styles from './SectionHeading.module.scss';

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'start' | 'center';
  className?: string;
};

export const SectionHeading = ({
  id,
  eyebrow,
  title,
  description,
  align = 'start',
  className,
}: SectionHeadingProps) => (
  <header className={cn(styles.heading, styles[align], className)}>
    {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
    <h2 id={id} className={styles.title}>
      {title}
    </h2>
    {description && <p className={styles.description}>{description}</p>}
  </header>
);
