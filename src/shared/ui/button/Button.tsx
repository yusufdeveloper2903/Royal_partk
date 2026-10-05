import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/shared/lib';
import styles from './Button.module.scss';

type ButtonOwnProps = {
  size?: 'sm' | 'md';
  fullWidth?: boolean;
};

type ButtonAsButton = ButtonOwnProps & ComponentPropsWithoutRef<'button'> & { href?: undefined };
type ButtonAsLink = ButtonOwnProps & ComponentPropsWithoutRef<'a'> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Renders an `<a>` when `href` is passed, otherwise a `<button type="button">`. */
export const Button = ({ size = 'md', fullWidth = false, className, ...props }: ButtonProps) => {
  const classes = cn(styles.button, styles[size], fullWidth && styles.fullWidth, className);

  if (props.href !== undefined) {
    return <a className={classes} {...(props as ComponentPropsWithoutRef<'a'>)} />;
  }

  return (
    <button type="button" className={classes} {...(props as ComponentPropsWithoutRef<'button'>)} />
  );
};
