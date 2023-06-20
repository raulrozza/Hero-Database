import { useCallback } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';

import { ICondition } from '@/shared/domain/entities';

import { conditionAtom, conditionKeyAtom } from '../atoms/conditionAtom';

export function useConditionState() {
  const [condition, setCondition] = useRecoilState(conditionAtom);
  const setConditionKey = useSetRecoilState(conditionKeyAtom);

  const handleUpdateCondition = useCallback(
    (condition: ICondition) => {
      setCondition(condition);
      setConditionKey(condition.key);
    },
    [setCondition, setConditionKey],
  );

  return [condition, handleUpdateCondition] as const;
}
