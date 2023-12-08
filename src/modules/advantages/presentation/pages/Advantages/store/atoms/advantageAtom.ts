import { atom } from 'recoil';

import { IAdvantage } from '@/shared/domain/entities';

export const advantageAtom = atom<IAdvantage | null>({
  key: 'advantage',
  default: null,
});
