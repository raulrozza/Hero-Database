import { IAdvantagesRepository } from '@/domain/repositories/IAdvantagesRepository';

import AdvantagesRepository from './implementations/AdvantagesRepository';

let instance: IAdvantagesRepository | null = null;

export default function makeAdvantagesRepository(): IAdvantagesRepository {
  if (!instance) {
    instance = new AdvantagesRepository();
  }

  return instance;
}
