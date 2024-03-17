import { atom } from 'recoil';

import { IModifier } from '@/shared/domain/entities';

export const modifierAtom = atom<IModifier | null>({
  key: 'modifier',
  default: null,
});
