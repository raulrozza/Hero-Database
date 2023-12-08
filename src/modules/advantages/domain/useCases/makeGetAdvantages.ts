import { makeAdvantagesRepository } from '@/modules/advantages/infra/repositories';

import GetAdvantages from './implementations/GetAdvantages';

let instance: GetAdvantages | null = null;

export default function makeGetAdvantages(): GetAdvantages {
  if (!instance) {
    const repository = makeAdvantagesRepository();

    instance = new GetAdvantages(repository);
  }

  return instance;
}
