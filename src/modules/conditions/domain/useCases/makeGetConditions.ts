import { makeConditionsRepository } from '@/modules/conditions/infra/repositories';

import GetConditions from './implementations/GetConditions';

let instance: GetConditions | null = null;

export default function makeGetConditions(): GetConditions {
  if (!instance) {
    const repository = makeConditionsRepository();

    instance = new GetConditions(repository);
  }

  return instance;
}
