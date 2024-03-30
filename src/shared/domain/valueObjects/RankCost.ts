export type CostType = 'standard' | 'flat';

export interface RankCost {
  type: CostType;
  costs: number[];
  maxRanks: number;
  ranksRatio?: number;
}
