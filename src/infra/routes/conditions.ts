import z from 'zod';

import { publicProcedure, router } from '@/infra/http/trpcServer';
import { makeConditionsRepository } from '@/infra/repositories';

export const conditionsRoutes = router({
  getByKey: publicProcedure
    .input(
      z.object({
        key: z.string(),
      }),
    )
    .query(({ input }) => makeConditionsRepository().findByKey(input.key)),
});
