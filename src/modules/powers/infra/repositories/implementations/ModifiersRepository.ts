import { IModifiersRepository } from '@/modules/powers/domain/repositories/IModifiersRepository';
import { MetaModifier, modifiers } from '@/modules/powers/infra/db';
import { IModifier } from '@/shared/domain/entities';

export default class ModifiersRepository implements IModifiersRepository {
  public findAll: IModifiersRepository['findAll'] = async () =>
    [...modifiers.entries()]
      .map(([key, modifier]) => this.convertModifier(key, modifier))
      .sort((a, b) => {
        if (a.name < b.name) return -1;

        return 1;
      });

  public findByKey: IModifiersRepository['findByKey'] = async key => {
    const modifier = modifiers.get(key);

    if (modifier) return this.convertModifier(key, modifier);

    return null;
  };

  private convertModifier(key: string, modifier: MetaModifier): IModifier {
    return {
      key,
      name: modifier.name,
      description: modifier.description,
      type: modifier.type,
      cost: modifier.cost,
      source: modifier.source,
    };
  }
}
