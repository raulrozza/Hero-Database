import { useCallback } from 'react';

import { useRecoilState } from 'recoil';

import { IEffect } from '@/shared/domain/entities';
import { useSetHashKey } from '@/shared/presentation/contexts';

import { effectAtom } from '../atoms/effectAtom';

export function useEffectState() {
  const [effect, setEffect] = useRecoilState(effectAtom);
  const setHashKey = useSetHashKey();

  const handleUpdateEffect = useCallback(
    (effect: IEffect) => {
      setEffect(effect);
      setHashKey(effect.key);
    },
    [setEffect, setHashKey],
  );

  return [effect, handleUpdateEffect] as const;
}
