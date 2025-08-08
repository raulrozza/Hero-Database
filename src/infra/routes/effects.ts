import z from 'zod';

import { publicProcedure, router } from '@/infra/http/trpcServer';

import { makeEffectsRepository } from '../repositories';

export const effectsRoutes = router({
  getByKey: publicProcedure
    .input(
      z.object({
        key: z.string(),
      }),
    )
    .query(({ input }) => makeEffectsRepository().findByKey(input.key)),
});
