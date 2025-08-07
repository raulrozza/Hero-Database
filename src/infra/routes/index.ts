import { router } from '@/infra/http/trpcServer';
import { advantagesRoutes } from '@/modules/advantages/infra/routes';
import { effectsRoutes, modifiersRoutes } from '@/modules/powers/infra/routes';

import { conditionsRoutes } from './conditions';

export const appRouter = router({
  advantages: advantagesRoutes,
  conditions: conditionsRoutes,
  modifiers: modifiersRoutes,
  effects: effectsRoutes,
});

export type AppRouter = typeof appRouter;
