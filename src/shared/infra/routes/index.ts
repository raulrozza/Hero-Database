import { advantagesRoutes } from '@/modules/advantages/infra/routes';
import { conditionsRoutes } from '@/modules/conditions/infra/routes';
import { router } from '@/shared/infra/http/trpcServer';

export const appRouter = router({
  advantages: advantagesRoutes,
  conditions: conditionsRoutes,
});

export type AppRouter = typeof appRouter;
