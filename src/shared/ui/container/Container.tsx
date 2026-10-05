import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/shared/lib';
import styles from './Container.module.scss';

export const Container = ({ className, ...props }: ComponentPropsWithoutRef<'div'>) => (
  <div className={cn(styles.container, className)} {...props} />
);
