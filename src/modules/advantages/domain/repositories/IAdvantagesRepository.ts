import { IAdvantage } from '@/shared/domain/entities';

export interface IAdvantagesRepository {
  findAll(): Promise<IAdvantage[]>;
  findByKey(key: string): Promise<IAdvantage | null>;
}
