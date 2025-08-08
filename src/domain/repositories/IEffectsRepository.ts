import { IEffect } from '@/domain/entities';

export interface IEffectsRepository {
  findAll(): Promise<IEffect[]>;
  findByKey(key: string): Promise<IEffect | null>;
}
