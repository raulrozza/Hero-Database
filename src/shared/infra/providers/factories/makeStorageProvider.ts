import IStorageProvider from '@/shared/domain/providers/IStorageProvider';
import LocalStorageProvider from '@/shared/infra/providers/LocalStorageProvider';

export default function makeStorageProvider(): IStorageProvider {
    return new LocalStorageProvider();
}
