import { ICondition } from '@/shared/domain/entities';

type MetaCondition = {
  key: string;
  name: string;
  description: string;
} & ({ type: 'basic' } | { type: 'combined'; components: string[] });

export const conditions = {};
