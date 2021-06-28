import Http from '@/config/http';
import IHTTPProvider from '@/shared/domain/providers/IHTTPProvider';
import HTTPError from '@/shared/infra/errors/HTTPError';

const MAXIMUM_RETRIES = 3;

export default class AxiosHTTPProvider implements IHTTPProvider {
    public async get<T = unknown>(path: string): Promise<T> {
        return this.handleRequest(async () => {
            const response = await Http.instance.get(path);
            return response.data;
        });
    }

    private async handleRequest<T extends any>(
        request: () => Promise<T>,
    ): Promise<T> {
        let attemptsMade = 0;

        while (attemptsMade < MAXIMUM_RETRIES) {
            try {
                const response = await request();

                return response;
            } catch (error) {
                attemptsMade++;
            }
        }

        try {
            return request();
        } catch (error) {
            throw new HTTPError(error);
        }
    }
}
