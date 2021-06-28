import ICondition from '@/shared/domain/entities/ICondition';

export interface IConditionsRepository {
    findAll(): Promise<ICondition[]>;
}
