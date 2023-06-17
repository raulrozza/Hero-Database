import type { AppProps } from 'next/app';

import { api } from '@/shared/infra/http/api';
import { sharedModule } from '@/shared/presentation/shared.module';

const SharedContainer = sharedModule.Container;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SharedContainer>
      <Component {...pageProps} />
    </SharedContainer>
  );
}

export default api.withTRPC(MyApp);
