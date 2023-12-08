export type AdvantageType = 'combat' | 'fortune' | 'general' | 'skill';

export interface IAdvantage {
  key: string;
  name: string;
  type: AdvantageType;
  description: string;
  maxRanks: number;
}
