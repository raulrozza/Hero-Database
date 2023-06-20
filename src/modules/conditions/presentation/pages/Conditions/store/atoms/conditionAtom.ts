import { string } from '@recoiljs/refine';
import { atom } from 'recoil';
import { urlSyncEffect } from 'recoil-sync';

import { ICondition } from '@/shared/domain/entities';

export const conditionAtom = atom<ICondition | null>({
  key: 'condition',
  default: null,
});

export const conditionKeyAtom = atom({
  key: 'itemKey',
  default: '',
  effects: [
    urlSyncEffect({
      storeKey: 'itemKey',
      refine: string(),
      read: ({ read }) => read('conditionKey'),
      write: ({ write }, newValue) => {
        console.log(newValue);

        return write('conditionKey', newValue);
      },
    }),
  ],
});
