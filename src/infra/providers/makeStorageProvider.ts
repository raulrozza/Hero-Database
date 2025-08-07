import IStorageProvider from '@/domain/providers/IStorageProvider';

import LocalStorageProvider from './implementations/LocalStorageProvider';

let instance: IStorageProvider | null = null;

export default function makeStorageProvider(): IStorageProvider {
  if (!instance) {
    instance = new LocalStorageProvider();
  }

  return instance;
}
