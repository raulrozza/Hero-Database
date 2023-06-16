import { publicProcedure, router } from '@/shared/infra/http/trpcServer';

export const conditionsRoutes = router({
  getAll: publicProcedure.query(() => []),
});
