import { useRecoilValue } from 'recoil';

import { effectAtom } from '../atoms/effectAtom';

export function useEffectValue() {
  return useRecoilValue(effectAtom);
}
