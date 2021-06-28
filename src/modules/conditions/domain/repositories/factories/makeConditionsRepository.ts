import { IConditionsRepository } from '@/modules/conditions/domain/repositories/IConditionsRepository';
import ConditionsRepository from '@/modules/conditions/infra/http/repositories/ConditionsRepository';
import makeHTTPProvider from '@/shared/infra/providers/factories/makeHTTPProvider';

export default function makeConditionsRepository(): IConditionsRepository {
    const httpProvider = makeHTTPProvider();

    return new ConditionsRepository(httpProvider);
}
