import { IAdvantage } from '@/domain/entities';
import { IAdvantagesRepository } from '@/domain/repositories/IAdvantagesRepository';
import { MetaAdvantage, advantages } from '@/infra/db';

export default class AdvantagesRepository implements IAdvantagesRepository {
  public findAll: IAdvantagesRepository['findAll'] = async () =>
    [...advantages.entries()]
      .map(([key, advantage]) => this.convertAdvantage(key, advantage))
      .sort((a, b) => {
        if (a.name < b.name) return -1;

        return 1;
      });

  public findByKey: IAdvantagesRepository['findByKey'] = async key => {
    const advantage = advantages.get(key);

    if (advantage) return this.convertAdvantage(key, advantage);

    return null;
  };

  private convertAdvantage(key: string, advantage: MetaAdvantage): IAdvantage {
    return {
      key,
      name: advantage.name,
      description: advantage.description,
      type: advantage.type,
      maxRanks: advantage.maxRanks,
      source: advantage.source,
    };
  }
}
