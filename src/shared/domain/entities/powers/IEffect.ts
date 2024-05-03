import { IModifier } from '@/shared/domain/entities/powers/IModifier';
import { Source } from '@/shared/domain/entities/sources';
import { ItemContent, RankCost } from '@/shared/domain/valueObjects';

export type EffectType =
  | 'attack'
  | 'movement'
  | 'sensory'
  | 'general'
  | 'control';

export type ActionType = 'standard' | 'move' | 'free' | 'reaction';

export type RangeType = 'personal' | 'close' | 'ranged' | 'perception';

export type DurationType =
  | 'instant'
  | 'concentration'
  | 'sustained'
  | 'continuous'
  | 'permanent';

export interface IEffect {
  key: string;
  name: string;
  description: ItemContent[];
  cost: RankCost;
  type: EffectType;
  action?: ActionType;
  range: RangeType;
  duration: DurationType;
  source: Source;
  extras: IModifier[];
  flaws: IModifier[];
}
