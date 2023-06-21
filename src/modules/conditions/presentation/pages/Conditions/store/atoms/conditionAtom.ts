import { atom } from 'recoil';

import { ICondition } from '@/shared/domain/entities';

export const conditionAtom = atom<ICondition | null>({
  key: 'condition',
  default: null,
});
