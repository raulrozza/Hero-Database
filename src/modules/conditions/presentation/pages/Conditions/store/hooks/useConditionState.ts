import { useCallback } from 'react';

import { useRecoilState } from 'recoil';

import { ICondition } from '@/shared/domain/entities';
import { useSetHashKey } from '@/shared/presentation/contexts';

import { conditionAtom } from '../atoms/conditionAtom';

export function useConditionState() {
  const [condition, setCondition] = useRecoilState(conditionAtom);
  const setHashKey = useSetHashKey();

  const handleUpdateCondition = useCallback(
    (condition: ICondition) => {
      setCondition(condition);
      setHashKey(condition.key);
    },
    [setCondition, setHashKey],
  );

  return [condition, handleUpdateCondition] as const;
}
