import { useRecoilValue } from 'recoil';

import { conditionAtom } from '../atoms/conditionAtom';

export function useConditionValue() {
  return useRecoilValue(conditionAtom);
}
