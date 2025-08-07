import { Source } from '@/domain/entities/sources';
import { ItemContent } from '@/domain/valueObjects';

export type AdvantageType = 'combat' | 'fortune' | 'general' | 'skill';

export interface IAdvantage {
  key: string;
  name: string;
  type: AdvantageType;
  description: ItemContent[];
  maxRanks: number;
  source: Source;
}
