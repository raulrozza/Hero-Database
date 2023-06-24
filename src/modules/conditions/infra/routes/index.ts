import z from 'zod';

import makeGetConditionByKey from '@/modules/conditions/domain/useCases/makeGetConditionByKey';
import makeGetConditions from '@/modules/conditions/domain/useCases/makeGetConditions';
import { publicProcedure, router } from '@/shared/infra/http/trpcServer';

export const conditionsRoutes = router({
  getAll: publicProcedure.query(() => makeGetConditions().execute()),
  getByKey: publicProcedure
    .input(
      z.object({
        key: z.string(),
      }),
    )
    .query(({ input }) => makeGetConditionByKey().execute(input)),
});
