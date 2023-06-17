export type ICondition = {
  key: string;
  name: string;
  description: string;
} & ({ type: 'basic' } | { type: 'combined'; components: ICondition[] });
