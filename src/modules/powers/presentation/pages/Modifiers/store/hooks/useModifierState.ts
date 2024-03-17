import { useCallback } from 'react';

import { useRecoilState } from 'recoil';

import { IModifier } from '@/shared/domain/entities';
import { useSetHashKey } from '@/shared/presentation/contexts';

import { modifierAtom } from '../atoms/modifierAtom';

export function useModifierState() {
  const [modifier, setModifier] = useRecoilState(modifierAtom);
  const setHashKey = useSetHashKey();

  const handleUpdateModifier = useCallback(
    (modifier: IModifier) => {
      setModifier(modifier);
      setHashKey(modifier.key);
    },
    [setModifier, setHashKey],
  );

  return [modifier, handleUpdateModifier] as const;
}
