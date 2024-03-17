import { makeModifiersRepository } from '@/modules/powers/infra/repositories';

import GetModifierByKey from './implementations/GetModifierByKey';

let instance: GetModifierByKey | null = null;

export default function makeGetModifierByKey(): GetModifierByKey {
  if (!instance) {
    const repository = makeModifiersRepository();

    instance = new GetModifierByKey(repository);
  }

  return instance;
}
