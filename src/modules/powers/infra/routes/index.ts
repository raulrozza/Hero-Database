import z from 'zod';

import makeGetModifierByKey from '@/modules/powers/domain/useCases/makeGetModifierByKey';
import makeGetModifiers from '@/modules/powers/domain/useCases/makeGetModifiers';
import { publicProcedure, router } from '@/shared/infra/http/trpcServer';

export const modifiersRoutes = router({
  getAll: publicProcedure.query(() => makeGetModifiers().execute()),
  getByKey: publicProcedure
    .input(
      z.object({
        key: z.string(),
      }),
    )
    .query(({ input }) => makeGetModifierByKey().execute(input)),
});
