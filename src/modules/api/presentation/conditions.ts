import ICondition from '@/shared/domain/entities/ICondition';

import conditions from '../infra/database/conditions.json';

export default class ConditionsView {
    public async get() {
        return conditions as ICondition[];
    }
}
