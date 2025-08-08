import z from 'zod';

import { publicProcedure, router } from '@/infra/http/trpcServer';
import { makeAdvantagesRepository } from '@/infra/repositories';

export const advantagesRoutes = router({
  getByKey: publicProcedure
    .input(
      z.object({
        key: z.string(),
      }),
    )
    .query(({ input }) => makeAdvantagesRepository().findByKey(input.key)),
});
