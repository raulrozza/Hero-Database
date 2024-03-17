import { Source } from '@/shared/domain/entities/sources';
import { ItemContent, RankCost } from '@/shared/domain/valueObjects';

export type ModificationType = 'extra' | 'flaw';

export interface IModification {
  key: string;
  name: string;
  type: ModificationType;
  description: ItemContent[];
  cost: RankCost;
  source: Source;
}
