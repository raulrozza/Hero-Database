import { advantagesRoutes } from '@/modules/advantages/infra/routes';
import { conditionsRoutes } from '@/modules/conditions/infra/routes';
import { modifiersRoutes } from '@/modules/powers/infra/routes';
import { router } from '@/shared/infra/http/trpcServer';

export const appRouter = router({
  advantages: advantagesRoutes,
  conditions: conditionsRoutes,
  modifiers: modifiersRoutes,
});

export type AppRouter = typeof appRouter;
