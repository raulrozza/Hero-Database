import React, { useCallback } from 'react';

import { RecoilURLSyncNext } from 'recoil-sync-next';

import { STORE_KEY } from '../../constants/storeKey';

const RecoilHashKeyStateProvider: React.FC = ({ children }) => (
  <RecoilURLSyncNext
    location={{ part: 'hash' }}
    storeKey={STORE_KEY}
    serialize={useCallback(data => {
      if (data instanceof Object) {
        const values = Object.values(data);

        return String(values[values.length - 1]);
      }

      return '';
    }, [])}
    deserialize={useCallback(data => {
      if (!data) return {};

      return {
        [STORE_KEY]: data,
      };
    }, [])}
  >
    {children}
  </RecoilURLSyncNext>
);

export default RecoilHashKeyStateProvider;
