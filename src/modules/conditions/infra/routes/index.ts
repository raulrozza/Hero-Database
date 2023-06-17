import makeGetConditions from '@/modules/conditions/domain/useCases/makeGetConditions';
import { publicProcedure, router } from '@/shared/infra/http/trpcServer';

export const conditionsRoutes = router({
  getAll: publicProcedure.query(() => makeGetConditions().execute()),
});
