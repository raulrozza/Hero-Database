import { RankCost } from '@/shared/domain/valueObjects';

type Config = {
  showPositiveSign: boolean;
};

export default function getCostText(
  cost: RankCost,
  config: Config = { showPositiveSign: true },
) {
  if (cost.type === 'standard') return getStandardText(cost, config);

  return getFlatText(cost, config);
}

function getStandardText(cost: RankCost, config: Config) {
  const costNumbers = costsToText(cost.costs, config);

  return `${costNumbers} per rank`;
}

function getFlatText(cost: RankCost, config: Config) {
  if (cost.maxRanks > 1) {
    const costNumbers = costsToText(cost.costs, { showPositiveSign: false });

    const maxRanksMultiplier = cost.costs[0] >= 0 ? 1 : -1;

    return `${costNumbers} to ${maxRanksMultiplier * cost.maxRanks}`;
  }

  if (cost.maxRanks === 1) {
    const costNumbers = costsToText(cost.costs, { showPositiveSign: false });

    return `${costNumbers} point`;
  }

  const costNumbers = costsToText(cost.costs, config);

  return `${costNumbers} per rank`;
}

function costsToText(costs: number[], config: Config) {
  return costs
    .map(cost => {
      if (cost >= 0 && config.showPositiveSign) return `+${cost}`;

      return String(cost);
    })
    .join('/');
}
