import { IAdvantage } from '@/domain/entities';

export const advantageQueries = {
  findByKey: (key: string) => ['advantages', key] as const,
};

export const advantageService = {
  findByKey: (key: string) => async () => {
    const response = await fetch(`/api/advantages/${key}`);

    const data = await response.json();

    return data as IAdvantage;
  },
};
