import { IConditionsRepository } from '@/modules/conditions/domain/repositories/IConditionsRepository';
import { ICondition } from '@/shared/domain/entities';
import IHTTPProvider from '@/shared/domain/providers/IHTTPProvider';

export default class ConditionsRepository implements IConditionsRepository {
  constructor(private httpProvider: IHTTPProvider) {}

  public async findAll(): Promise<ICondition[]> {
    return this.httpProvider.get('conditions');
  }
}
