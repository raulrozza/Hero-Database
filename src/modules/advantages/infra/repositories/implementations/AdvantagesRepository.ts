import { IAdvantagesRepository } from '@/modules/advantages/domain/repositories/IAdvantagesRepository';
import { MetaAdvantage, advantages } from '@/modules/advantages/infra/db';
import { IAdvantage } from '@/shared/domain/entities';

export default class AdvantagesRepository implements IAdvantagesRepository {
  public findAll: IAdvantagesRepository['findAll'] = async () =>
    [...advantages.entries()].map(([key, advantage]) =>
      this.convertAdvantage(key, advantage),
    );

  public findByKey: IAdvantagesRepository['findByKey'] = async key => {
    const advantage = advantages.get(key);

    if (advantage) return this.convertAdvantage(key, advantage);

    return null;
  };

  private convertAdvantage(key: string, advantage: MetaAdvantage): IAdvantage {
    return {
      key,
      name: advantage.name,
      description: advantage.description.join('\n'),
      type: advantage.type,
      maxRanks: advantage.maxRanks,
      source: advantage.source,
    };
  }
}
