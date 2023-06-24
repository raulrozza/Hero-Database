import { makeConditionsRepository } from '@/modules/conditions/infra/repositories';

import GetConditionByKey from './implementations/GetConditionByKey';

let instance: GetConditionByKey | null = null;

export default function makeGetConditionByKey(): GetConditionByKey {
  if (!instance) {
    const repository = makeConditionsRepository();

    instance = new GetConditionByKey(repository);
  }

  return instance;
}
