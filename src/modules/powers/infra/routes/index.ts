import z from 'zod';

import makeGetEffectByKey from '@/modules/powers/domain/useCases/makeGetEffectByKey';
import makeGetEffects from '@/modules/powers/domain/useCases/makeGetEffects';
import makeGetModifierByKey from '@/modules/powers/domain/useCases/makeGetModifierByKey';
import makeGetModifiers from '@/modules/powers/domain/useCases/makeGetModifiers';
import { publicProcedure, router } from '@/infra/http/trpcServer';

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

export const effectsRoutes = router({
  getAll: publicProcedure.query(() => makeGetEffects().execute()),
  getByKey: publicProcedure
    .input(
      z.object({
        key: z.string(),
      }),
    )
    .query(({ input }) => makeGetEffectByKey().execute(input)),
});
