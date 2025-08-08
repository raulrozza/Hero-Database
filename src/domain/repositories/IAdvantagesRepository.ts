import { IAdvantage } from '@/domain/entities';

export interface IAdvantagesRepository {
  findAll(): Promise<IAdvantage[]>;
  findByKey(key: string): Promise<IAdvantage | null>;
}
