import { IModifier } from '@/shared/domain/entities';

export interface IModifiersRepository {
  findAll(): Promise<IModifier[]>;
  findByKey(key: string): Promise<IModifier | null>;
}
