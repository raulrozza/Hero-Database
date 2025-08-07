import { capitalize } from 'lodash';

import { IAdvantage } from '@/domain/entities';

function getRanksText(maxRanks: number) {
  if (maxRanks < 0) return 'Ranked';

  if (maxRanks > 1) return `Ranks (${maxRanks})`;
}

export default function getSubtitle(advantage: IAdvantage) {
  const ranks = getRanksText(advantage.maxRanks);
  const type = capitalize(advantage.type);

  if (ranks) return `${type}, ${ranks}`;

  return type;
}
