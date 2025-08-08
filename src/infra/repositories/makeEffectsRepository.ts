import { IEffectsRepository } from '@/domain/repositories/IEffectsRepository';

import EffectsRepository from './implementations/EffectsRepository';

let instance: IEffectsRepository | null = null;

export default function makeEffectsRepository(): IEffectsRepository {
  if (!instance) {
    instance = new EffectsRepository();
  }

  return instance;
}
