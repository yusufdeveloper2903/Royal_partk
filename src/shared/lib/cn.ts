type ClassValue = string | false | null | undefined;

/** Joins truthy class names: `cn('a', isActive && 'b')` → `'a b'`. */
export const cn = (...classes: ClassValue[]): string => classes.filter(Boolean).join(' ');
