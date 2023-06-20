import { string } from '@recoiljs/refine';
import { atom } from 'recoil';
import { urlSyncEffect } from 'recoil-sync';

import { ICondition } from '@/shared/domain/entities';

export const conditionAtom = atom<ICondition | null>({
  key: 'condition',
  default: null,
});
