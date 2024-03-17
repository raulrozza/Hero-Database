import { useRecoilValue } from 'recoil';

import { modifierAtom } from '../atoms/modifierAtom';

export function useModifierValue() {
  return useRecoilValue(modifierAtom);
}
