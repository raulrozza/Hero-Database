'use client';

import { useEffect, useState } from 'react';

const breakpoints = ['sm', 'md', 'lg'] as const;

type TBreakpoints = (typeof breakpoints)[number];

type TDimension = TBreakpoints | Omit<string, TBreakpoints>;

const getQuery = (dimension: string) => `(max-width: ${dimension})`;

function isKnowBreakpoint(dimention: TDimension): dimention is TBreakpoints {
  return breakpoints.includes(dimention as TBreakpoints);
}

const BREAKPOINTS_DICTIONARY: Record<TBreakpoints, string> = {
  lg: '1024px',
  md: '768px',
  sm: '640px',
};

const getBreakpoint = (dimention: TDimension) => {
  if (isKnowBreakpoint(dimention)) {
    return BREAKPOINTS_DICTIONARY[dimention];
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
  const [matches, setMatches] = useState(getMatches(getBreakpoint(dimension)));

  useEffect(() => {
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    const matchMedia = window.matchMedia(getQuery(getBreakpoint(dimension)));

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [dimension]);

  return matches;
}
