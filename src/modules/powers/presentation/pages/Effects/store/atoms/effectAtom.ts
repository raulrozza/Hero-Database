import { atom } from 'recoil';

import { IEffect } from '@/shared/domain/entities';

export const effectAtom = atom<IEffect | null>({
  key: 'effect',
  default: null,
});
