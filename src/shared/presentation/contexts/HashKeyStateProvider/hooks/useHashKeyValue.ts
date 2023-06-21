import { useRecoilValue } from 'recoil';

import { hashKeyAtom } from '../atoms/hashKeyAtom';

export function useHashKeyValue() {
  return useRecoilValue(hashKeyAtom);
}
