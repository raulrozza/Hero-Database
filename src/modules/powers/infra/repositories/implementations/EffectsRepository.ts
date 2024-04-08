import { IEffectsRepository } from '@/modules/powers/domain/repositories/IEffectsRepository';
import { MetaEffect, effects } from '@/modules/powers/infra/db';
import { IEffect } from '@/shared/domain/entities';

export default class EffectsRepository implements IEffectsRepository {
  public findAll: IEffectsRepository['findAll'] = async () =>
    [...effects.entries()]
      .map(([key, effect]) => this.convertEffect(key, effect))
      .sort((a, b) => {
        if (a.name < b.name) return -1;

        return 1;
      });

  public findByKey: IEffectsRepository['findByKey'] = async key => {
    const effect = effects.get(key);

    if (effect) return this.convertEffect(key, effect);

    return null;
  };

  private convertEffect(key: string, effect: MetaEffect): IEffect {
    return {
      key,
      name: effect.name,
      description: effect.description,
      type: effect.type,
      cost: effect.cost,
      duration: effect.duration,
      range: effect.range,
      action: effect.action,
      source: effect.source,
    };
  }
}
