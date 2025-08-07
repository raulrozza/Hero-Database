import z from 'zod';

import { publicProcedure, router } from '@/infra/http/trpcServer';
import makeGetConditionByKey from '@/modules/conditions/domain/useCases/makeGetConditionByKey';
import makeGetConditions from '@/modules/conditions/domain/useCases/makeGetConditions';

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
