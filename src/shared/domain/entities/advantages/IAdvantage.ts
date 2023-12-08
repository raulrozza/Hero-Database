import { Source } from '@/shared/domain/entities/sources';

export type AdvantageType = 'combat' | 'fortune' | 'general' | 'skill';

export interface IAdvantage {
  key: string;
  name: string;
  type: AdvantageType;
  description: string;
  maxRanks: number;
  source: Source;
}
