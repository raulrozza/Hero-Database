import { makeEffectsRepository } from '@/modules/powers/infra/repositories';

import GetEffectByKey from './implementations/GetEffectByKey';

let instance: GetEffectByKey | null = null;

export default function makeGetEffectByKey(): GetEffectByKey {
  if (!instance) {
    const repository = makeEffectsRepository();

    instance = new GetEffectByKey(repository);
  }

  return instance;
}
