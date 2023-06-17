import { IConditionsRepository } from '@/modules/conditions/domain/repositories/IConditionsRepository';
import { MetaCondition, conditions } from '@/modules/conditions/infra/db';
import { ICondition } from '@/shared/domain/entities';

export default class ConditionsRepository implements IConditionsRepository {
  public async findAll(): Promise<ICondition[]> {
    return Object.entries(conditions).map(([key, condition]) =>
      this.convertCondition(key, condition),
    );
  }

  private convertCondition(key: string, condition: MetaCondition): ICondition {
    if (condition.type === 'basic')
      return {
        key,
        name: condition.name,
        description: condition.description.join('\n'),
        type: condition.type,
      };

    return {
      key,
      name: condition.name,
      description: condition.description.join('\n'),
      type: condition.type,
      components: condition.components.map(key => {
        const data = conditions[key as keyof typeof conditions];

        return this.convertCondition(key, data);
      }),
    };
  }
}
