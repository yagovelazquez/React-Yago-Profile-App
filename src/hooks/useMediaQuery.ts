import { useEffect, useState } from 'react';

interface IUseMediaQuery {
  maxWidth: number;
}

export const useMediaQuery = ({ maxWidth }: IUseMediaQuery) => {
  const [isScreenSizeSmallerThan, setIsScreenSizeSmallerThan] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
    setIsScreenSizeSmallerThan(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
        setIsScreenSizeSmallerThan(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [maxWidth]);

  return { isScreenSizeSmallerThan };
};
