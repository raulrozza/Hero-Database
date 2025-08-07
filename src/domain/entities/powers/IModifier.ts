import { Source } from '@/domain/entities/sources';
import { ItemContent, RankCost } from '@/domain/valueObjects';

export type ModifierType = 'extra' | 'flaw';

export interface IModifier {
  key: string;
  name: string;
  type: ModifierType;
  description: ItemContent[];
  cost: RankCost;
  source: Source;
  variants: Array<{
    effect: string;
    description: ItemContent[];
    cost: RankCost;
  }>;
}
