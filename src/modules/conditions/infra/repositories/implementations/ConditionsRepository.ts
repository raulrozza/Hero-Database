import { IConditionsRepository } from '@/modules/conditions/domain/repositories/IConditionsRepository';
import { conditions } from '@/modules/conditions/infra/db';
import { ICondition } from '@/shared/domain/entities';

export default class ConditionsRepository implements IConditionsRepository {
  public async findAll(): Promise<ICondition[]> {
    return conditions;
  }
}
