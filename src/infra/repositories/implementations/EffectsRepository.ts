import { IEffectsRepository } from '@/domain/repositories/IEffectsRepository';
import { MetaEffect, effects, modifiers } from '@/infra/db';
import { IEffect, IModifier } from '@/domain/entities';

export default class EffectsRepository implements IEffectsRepository {
  private extras = new Map<string, Set<IModifier>>();
  private flaws = new Map<string, Set<IModifier>>();

  constructor() {
    modifiers.forEach(modifier => {
      if (!modifier.variants) return;

      modifier.variants.forEach(variant => {
        const map = this[`${modifier.type}s`];

        const existingEffectModifiers = map.get(variant.effect);

        const newModifier = {
          ...modifier,
          key: modifier.name,
          description: variant.description || modifier.description,
          cost: variant.cost || modifier.cost,
          name: variant.name || modifier.name,
          variants: [],
        };

        if (!existingEffectModifiers)
          return map.set(variant.effect, new Set([newModifier]));

        existingEffectModifiers.add(newModifier);
      });
    });
  }

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
    const extras = this.extras.get(key);
    const flaws = this.flaws.get(key);

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
      extras: extras ? [...extras] : [],
      flaws: flaws ? [...flaws] : [],
    };
  }
}
