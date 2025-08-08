import { IModifier } from '@/domain/entities';

export const modifierQueries = {
  findByKey: (key: string) => ['modifiers', key] as const,
};

export const modifierService = {
  findByKey: (key: string) => async () => {
    const response = await fetch(`/api/modifiers/${key}`);

    const data = await response.json();

    return data as IModifier;
  },
};
