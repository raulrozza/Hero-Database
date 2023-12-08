import { useRecoilValue } from 'recoil';

import { advantageAtom } from '../atoms/advantageAtom';

export function useAdvantageValue() {
  return useRecoilValue(advantageAtom);
}
