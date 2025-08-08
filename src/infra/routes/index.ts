import { router } from '@/infra/http/trpcServer';

import { advantagesRoutes } from './advantages';
import { conditionsRoutes } from './conditions';
import { effectsRoutes } from './effects';
import { modifiersRoutes } from './modifiers';

export const appRouter = router({
  advantages: advantagesRoutes,
  conditions: conditionsRoutes,
  modifiers: modifiersRoutes,
  effects: effectsRoutes,
});

export type AppRouter = typeof appRouter;
