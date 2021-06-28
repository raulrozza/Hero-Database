import IHTTPProvider from '@/shared/domain/providers/IHTTPProvider';
import AxiosHTTPProvider from '@/shared/infra/providers/AxiosHTTPProvider';

export default function makeHTTPProvider(): IHTTPProvider {
    return new AxiosHTTPProvider();
}
