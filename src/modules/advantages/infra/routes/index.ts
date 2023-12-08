import z from 'zod';

import makeGetAdvantageByKey from '@/modules/advantages/domain/useCases/makeGetAdvantageByKey';
import makeGetAdvantages from '@/modules/advantages/domain/useCases/makeGetAdvantages';
import { publicProcedure, router } from '@/shared/infra/http/trpcServer';

export const advantagesRoutes = router({
  getAll: publicProcedure.query(() => makeGetAdvantages().execute()),
  getByKey: publicProcedure
    .input(
      z.object({
        key: z.string(),
      }),
    )
    .query(({ input }) => makeGetAdvantageByKey().execute(input)),
});
