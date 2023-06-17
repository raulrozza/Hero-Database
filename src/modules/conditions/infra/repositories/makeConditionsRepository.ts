import { IConditionsRepository } from '@/modules/conditions/domain/repositories/IConditionsRepository';

import ConditionsRepository from './implementations/ConditionsRepository';

let instance: IConditionsRepository | null = null;

export default function makeConditionsRepository(): IConditionsRepository {
  if (!instance) {
    instance = new ConditionsRepository();
  }

  return instance;
}
