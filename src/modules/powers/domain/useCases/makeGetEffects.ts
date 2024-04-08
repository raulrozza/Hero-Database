import { makeEffectsRepository } from '@/modules/powers/infra/repositories';

import GetEffects from './implementations/GetEffects';

let instance: GetEffects | null = null;

export default function makeGetEffects(): GetEffects {
  if (!instance) {
    const repository = makeEffectsRepository();

    instance = new GetEffects(repository);
  }

  return instance;
}
