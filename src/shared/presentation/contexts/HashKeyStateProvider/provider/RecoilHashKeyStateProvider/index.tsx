import React from 'react';

import { RecoilURLSyncNext } from 'recoil-sync-next';

import { STORE_KEY } from '../../constants/storeKey';

const RecoilHashKeyStateProvider: React.FC = ({ children }) => (
  <RecoilURLSyncNext
    location={{ part: 'hash' }}
    storeKey={STORE_KEY}
    serialize={data => {
      if (data instanceof Object) {
        const values = Object.values(data);

        return String(values[values.length - 1]);
      }

      return '';
    }}
    deserialize={data => {
      if (!data) return {};

      return {
        itemKey: data,
      };
    }}
  >
    {children}
  </RecoilURLSyncNext>
);

export default RecoilHashKeyStateProvider;
