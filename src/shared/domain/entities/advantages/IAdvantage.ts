import { Source } from '@/shared/domain/entities/sources';
import { ItemContent } from '@/shared/domain/valueObjects';

export type AdvantageType = 'combat' | 'fortune' | 'general' | 'skill';

export interface IAdvantage {
  key: string;
  name: string;
  type: AdvantageType;
  description: ItemContent[];
  maxRanks: number;
  source: Source;
}
