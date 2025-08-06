import { Source } from '@/shared/domain/entities/sources';
import { ItemContent } from '@/shared/domain/valueObjects';

interface IBaseCondition {
  type: string;
  key: string;
  name: string;
  description: ItemContent[];
  source: Source;
}

export interface IBasicCondition extends IBaseCondition {
  type: 'basic';
}

export interface ICombinedCondition extends IBaseCondition {
  type: 'combined';
  components: ICondition[];
}

export type ICondition = IBasicCondition | ICombinedCondition;
