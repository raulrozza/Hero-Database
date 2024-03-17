import { makeModifiersRepository } from '@/modules/powers/infra/repositories';

import GetModifiers from './implementations/GetModifiers';

let instance: GetModifiers | null = null;

export default function makeGetModifiers(): GetModifiers {
  if (!instance) {
    const repository = makeModifiersRepository();

    instance = new GetModifiers(repository);
  }

  return instance;
}
