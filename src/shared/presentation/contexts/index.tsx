import { FC } from 'react';

import { RecoilRoot } from 'recoil';
import { RecoilURLSyncNext } from 'recoil-sync-next';

import { ThemeProvider } from './ThemeProvider';

export * from './ThemeProvider';

const SharedContainer: FC = ({ children }) => (
  <RecoilRoot>
    <RecoilURLSyncNext
      location={{ part: 'hash' }}
      storeKey="itemKey"
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
      <ThemeProvider>{children}</ThemeProvider>
    </RecoilURLSyncNext>
  </RecoilRoot>
);

export default SharedContainer;
