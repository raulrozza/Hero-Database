import { Source } from '@/shared/domain/entities/sources';
import { ItemContent, RankCost } from '@/shared/domain/valueObjects';

export type ModifierType = 'extra' | 'flaw';

export interface IModifier {
  key: string;
  name: string;
  type: ModifierType;
  description: ItemContent[];
  cost: RankCost;
  source: Source;
}
