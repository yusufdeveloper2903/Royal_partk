import { useCallback, useEffect, useState } from 'react';

/** Open/close state for the mobile menu; closes on Escape and when the viewport grows past `breakpoint`. */
export const useMobileMenu = (breakpoint = 768) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const onViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) close();
    };

    document.addEventListener('keydown', onKeyDown);
    mediaQuery.addEventListener('change', onViewportChange);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      mediaQuery.removeEventListener('change', onViewportChange);
    };
  }, [isOpen, close, breakpoint]);

  return { isOpen, toggle, close };
};
