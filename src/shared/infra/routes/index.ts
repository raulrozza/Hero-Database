import { conditionsRoutes } from '@/modules/conditions/infra/routes';
import { router } from '@/shared/infra/http/trpcServer';

export const appRouter = router({
  conditions: conditionsRoutes,
});

export type AppRouter = typeof appRouter;
