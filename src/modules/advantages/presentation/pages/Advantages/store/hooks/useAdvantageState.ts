import { useCallback } from 'react';

import { useRecoilState } from 'recoil';

import { IAdvantage } from '@/shared/domain/entities';
import { useSetHashKey } from '@/shared/presentation/contexts';

import { advantageAtom } from '../atoms/advantageAtom';

export function useAdvantageState() {
  const [advantage, setAdvantage] = useRecoilState(advantageAtom);
  const setHashKey = useSetHashKey();

  const handleUpdateAdvantage = useCallback(
    (advantage: IAdvantage) => {
      setAdvantage(advantage);
      setHashKey(advantage.key);
    },
    [setAdvantage, setHashKey],
  );

  return [advantage, handleUpdateAdvantage] as const;
}
