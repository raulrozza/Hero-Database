import { makeAdvantagesRepository } from '@/modules/advantages/infra/repositories';

import GetAdvantageByKey from './implementations/GetAdvantageByKey';

let instance: GetAdvantageByKey | null = null;

export default function makeGetAdvantageByKey(): GetAdvantageByKey {
  if (!instance) {
    const repository = makeAdvantagesRepository();

    instance = new GetAdvantageByKey(repository);
  }

  return instance;
}
