import { ICondition } from '@/domain/entities';
import { IConditionsRepository } from '@/domain/repositories/IConditionsRepository';
import { MetaCondition, conditions } from '@/infra/db';

export default class ConditionsRepository implements IConditionsRepository {
  public findAll: IConditionsRepository['findAll'] = async () =>
    [...conditions.entries()].map(([key, condition]) =>
      this.convertCondition(key, condition),
    );

  public findByKey: IConditionsRepository['findByKey'] = async key => {
    const condition = conditions.get(key);

    if (condition) return this.convertCondition(key, condition);

    return null;
  };

  private convertCondition(key: string, condition: MetaCondition): ICondition {
    if (condition.type === 'basic')
      return {
        key,
        name: condition.name,
        description: condition.description,
        type: condition.type,
        source: condition.source,
      };

    return {
      key,
      name: condition.name,
      description: condition.description,
      type: condition.type,
      components: condition.components.map(key => {
        const data = conditions.get(key);

        if (!data) throw new Error(`Condition ${key} does not exist`);

        return this.convertCondition(key, data);
      }),
      source: condition.source,
    };
  }
}
