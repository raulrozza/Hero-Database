'use client';
import { useEffect, useState } from 'react';

import { ITheme } from '@/config/theme';
import { useThemeProvider } from '@/shared/presentation/contexts';

type TBreakpoints = keyof ITheme['layout']['breakpoints'];

type TDimension = TBreakpoints | Omit<string, TBreakpoints>;

const getQuery = (dimension: string) => `(max-width: ${dimension})`;

const isThemeBreakpoint = (
  dimention: TDimension,
  theme: ITheme,
): dimention is TBreakpoints =>
  Object.keys(theme.layout.breakpoints).includes(dimention as TBreakpoints);

const getBreakpoint = (dimention: TDimension, theme: ITheme) => {
  if (isThemeBreakpoint(dimention, theme)) {
    return theme.layout.breakpoints[dimention];
  }

  return dimention as string;
};

const getMatches = (dimension: string): boolean => {
  if (typeof window === 'undefined') return false;

  return window.matchMedia(getQuery(dimension)).matches;
};

/**
 *
 * @param dimension The theme breakpoint or the breakpoint in px/rem
 * @returns
 */
export default function useMediaQuery(dimension: TDimension): boolean {
  const { theme } = useThemeProvider();

  const [matches, setMatches] = useState(
    getMatches(getBreakpoint(dimension, theme)),
  );

  useEffect(() => {
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    const matchMedia = window.matchMedia(
      getQuery(getBreakpoint(dimension, theme)),
    );

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [dimension, theme]);

  return matches;
}
