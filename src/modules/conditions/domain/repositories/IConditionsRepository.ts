import { ICondition } from '@/domain/entities';

export interface IConditionsRepository {
  findAll(): Promise<ICondition[]>;
  findByKey(key: string): Promise<ICondition | null>;
}
