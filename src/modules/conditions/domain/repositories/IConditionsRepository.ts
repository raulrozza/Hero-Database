import { ICondition } from '@/shared/domain/entities';

export interface IConditionsRepository {
  findAll(): Promise<ICondition[]>;
  findByKey(key: string): Promise<ICondition | null>;
}
