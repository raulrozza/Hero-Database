import { IModifiersRepository } from '@/domain/repositories/IModifiersRepository';

import ModifiersRepository from './implementations/ModifiersRepository';

let instance: IModifiersRepository | null = null;

export default function makeModifiersRepository(): IModifiersRepository {
  if (!instance) {
    instance = new ModifiersRepository();
  }

  return instance;
}
