import { useRecoilState } from 'recoil';

import { conditionAtom } from '../atoms/conditionAtom';

export function useConditionState() {
  return useRecoilState(conditionAtom);
}
