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

    const pointsText = getPointsText(cost.costs);

    return `${costNumbers} ${pointsText}`;
  }

  if (!!cost.ranksRatio && cost.ranksRatio !== 1) {
    const costNumbers = costsToText(cost.costs, config);

    return `${costNumbers} per ${cost.ranksRatio} points`;
  }

  const costNumbers = costsToText(cost.costs, config);

  return `${costNumbers} per rank`;
}

function costsToText(costs: number[], config: Config) {
  const hasMoreThanTwoCosts = costs.length > 2;

  const printableCosts = hasMoreThanTwoCosts
    ? [costs[0], costs[costs.length - 1]]
    : costs;

  return printableCosts
    .map(cost => {
      if (cost >= 0 && config.showPositiveSign) return `+${cost}`;

      return String(cost);
    })
    .join(hasMoreThanTwoCosts ? ' to ' : '/');
}

function getPointsText(costs: number[]) {
  if (costs.length > 1) return 'points';

  const cost = costs[0];

  if (cost > 1 || cost === 0) return 'points';

  return 'point';
}
