import { ICondition } from '@/shared/domain/entities';

export interface IConditionsRepository {
  findAll(): Promise<ICondition[]>;
}
