import type { AppProps } from 'next/app';

import { api } from '@/shared/infra/http/api';
import AppContainer from '@/shared/presentation/view/AppContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  );
}

export default api.withTRPC(MyApp);
