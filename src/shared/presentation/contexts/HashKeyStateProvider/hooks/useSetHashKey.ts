import { useSetRecoilState } from 'recoil';

import { hashKeyAtom } from '../atoms/hashKeyAtom';

export function useSetHashKey() {
  return useSetRecoilState(hashKeyAtom);
}
