import { string } from '@recoiljs/refine';
import { atom } from 'recoil';
import { urlSyncEffect } from 'recoil-sync';

import { STORE_KEY } from '../constants/storeKey';

export const hashKeyAtom = atom({
  key: STORE_KEY,
  default: '',
  effects: [
    urlSyncEffect({
      storeKey: STORE_KEY,
      refine: string(),
      read: ({ read }) => read('hashKeyAtom'),
      write: ({ write }, newValue) => write('hashKeyAtom', newValue),
    }),
  ],
});
