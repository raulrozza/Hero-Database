import { ICondition } from '@/domain/entities';

export const conditionQueries = {
  findByKey: (key: string) => ['conditions', key] as const,
};

export const conditionService = {
  findByKey: (key: string) => async () => {
    const response = await fetch(`/api/conditions/${key}`);

    const data = await response.json();

    return data as ICondition;
  },
};
