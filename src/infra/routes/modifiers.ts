import z from 'zod';

import { publicProcedure, router } from '@/infra/http/trpcServer';

import { makeModifiersRepository } from '../repositories';

export const modifiersRoutes = router({
  getByKey: publicProcedure
    .input(
      z.object({
        key: z.string(),
      }),
    )
    .query(({ input }) => makeModifiersRepository().findByKey(input.key)),
});
